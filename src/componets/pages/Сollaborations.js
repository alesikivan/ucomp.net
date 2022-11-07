import { useEffect, useState } from 'react'
import axios from 'axios'
import Parser from 'html-react-parser'

import Title from '../particles/Title'
import Preloader from '../particles/Preloader'
import images from '../../assets/images/imgs'


import '../../assets/styles/css/pages/collaborations.css'


function Collaborations() {  
  const [collaborations, setCollaborations] = useState([])
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    const getCollaborations = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/collaboration/get`
      
      axios(url)
      .then(content => setCollaborations( addHiddenTextFlag(content.data.collaborations) ))
      .catch(err => console.error(err))
      .finally(() => setPreloader(false))
    }
    
    getCollaborations()
  }, [])

  // Flag to display full description
  function addHiddenTextFlag(collaborations) {
    const updCollaborations = collaborations.map(member => {
      member.active = false
      return member
    })

    // Make first item always active
    if (updCollaborations.length > 0) 
      updCollaborations[0].active = true

    return updCollaborations
  }

  function toggleInfo(index) {
    const updCollaborations = collaborations.map((info, i) => {
      info.active = index === i ? !info.active : info.active
      return info
    })

    setCollaborations(updCollaborations)
  }

  return (
    <main>
      <Title text='Collaborations' />
      <br />

      <section className='information'>
        <h3 className='title-medium'>
          Urban Complexity Lab is hiring!
        </h3>

        <span className="description special">
          Urban Complexity Lab led by <b>Prof. Stanislav Sobolevsky</b> at NYU CUSP is happy to announce several research assistant positions available to the CUSP and/or NYU graduate students. Visiting scholars from outside <b>NYU</b> are also welcome!
        </span>        
        
        <span className="description">
          <b>Successful candidates</b> will work or cooperate on the research and data curation for one or several of the available ongoing <b>projects of the lab</b>:
        </span>

        <div className="projects">
          <div className="project">
            <img src={images.car} alt="car" />
            <span>METS-R: Multi-modal Energy-optimal Trip Scheduling in Real-time for Transportation Hubs</span>
          </div>

          <div className="project">
            <img src={images.hierarchical} alt="hierarchical" />
            <span>HITPACER (Hierarchical Trajectory Partitioning and Clustering for Mining Recurrent Travel Behavior)</span>
          </div>

          <div className="project">
            <img src={images.taxi} alt="taxi" />
            <span>Impact Of Ride-Sharing In New York City</span>
          </div>
        </div>

        <br />
        <br />
        
        <span className="description special">
          Students who are willing to continue their involvement over the next academic year are particularly encouraged to apply.
        </span>
        <span className="description special">
          We encourage applicants with interest/prior experience in one or more of the <b>following areas</b>:
        </span>


        <ul className="areas">
          <li className="area">simulation modeling, Bayesian inference (relevant to project B)</li>
          <li className="area">deep representation learning (projects A,C)</li>
          <li className="area">anomaly detection in temporal and/or spatio-temporal data (project A)</li>
          <li className="area">dynamic vehicle routing (project A)</li>
          <li className="area">trajectory mining (project A,C)</li>
        </ul>
      </section>

      {
        preloader ? (
          <div className='preloaders'>
            <Preloader height='60px' width='65%' />
            <Preloader height='60px' width='65%' />
            <Preloader height='60px' width='65%' />
          </div>
        ) : (
          <article className='information-blocks'>
            {
              collaborations.map((info, index) => {
                return (
                  <section key={index} className='information-block'>
                    <h3 className='title-medium' onClick={() => toggleInfo(index)}>
                      {info.title}
                      <button className='toggle-info'>
                        { info.active ? '-' : '+' }
                      </button>
                    </h3>

                    {
                      info.active ?
                        <span className="description special">
                          { Parser(info.description) }
                        </span>
                        :
                        ''
                    }
                  </section>
                )
              })
            }
          </article>
        )
      }
    </main>
  )
}

export default Collaborations
