import Title from '../particles/Title'
import images from '../../assets/images/imgs'

import Parser from 'html-react-parser'

import '../../assets/styles/css/pages/collaborations.css'
import { useState } from 'react'

function Collaborations() {  
  const email = 'info@ucomp.net'

  const defaultInformation = [
    {
      title: `Call For Collaborators: Ongoing Research Projects At Urban Complexity Group`,
      description: `Urban Complexity Group has multiple ongoing research projects in theoretic/computational foundations of network science as well as its applications to complex urban systems. We always welcome interest from scholars all over the world to join us in those efforts. We are looking for motivated collaborators at all academic levels: graduate students, post-docs as well as faculty researchers who might be interested in joining our research activities, contributing to their further development beyond the initial proof-of-concept phase, co-authoring resulting research publications or preparing joint funding applications. <br /> <br /> Please find some brief descriptions of our ongoing research activities below. The scope of possible joint research activates is however not limited to those. If interested please feel free to reach out at <a href="mailto:${email}">email</a>. A short statement of interest and a description of your (or your group’s) research profile/background would be a good way to start the conversation.`,
      active: true
    },
    {
      title: `Complex network representation through multi-dimensional node projection`,
      description: `Complex network topology might get pretty complicated challenging many network analysis objectives, such as community detection for example. This however makes common emergent network phenomena such as scale-free topology or small-world property even more intriguing. In the present proof-of-concept paper we propose a simple model of network representation inspired by a signal transmission physical analogy, which is apparently capable of reproducing both of the above phenomena. The model appears to be general enough to represent and/or approximate arbitrary complex networks. We propose an approach constructing such a representation by projecting each node into a multi-dimensional space of signal spectrum vectors, where network topology is induced by their overlaps. As one of the implications this enables reducing community detection in complex networks to a straightforward clustering over the projection space, for which multiple efficient approaches are available. We believe such a network representation could turn out to be a useful tool for multiple network analysis objectives. Further details could be found on <a href="${'https://arxiv.org/abs/1806.03687'}">arxiv</a>.`,
      active: false
    },
    {
      title: `Inferring hierarchical structure of spatial and generic complex networks through a modeling framework`,
      description: `Our recent paper [Grauwin et al. Sci. Rep. 7 (2017)] demonstrates that community and hierarchical structure of the networks of human interactions largely determines the least and should be taken into account while modeling them. In the present proof-of-concept pre-print the opposite question is considered: could the hierarchical structure itself be inferred to be best aligned with the network model? The inference mechanism is provided for both – spatial networks as well as complex networks in general – through a model based on hierarchical and (if defined) geographical distances. The mechanism allows to discover hierarchical and community structure at any desired resolution in complex networks and in particular – the space-independent structure of the spatial networks. The approach is illustrated on the example of the interstate people migration network in USA. Further details could be found on <a href="${'https://arxiv.org/abs/1712.05792'}">arxiv</a>.`,
      active: false
    },
    {
      title: `Deep Learning For Network Analysis `,
      description: `Deep learning proved to be a useful tool for mining pattern in complex data, such as image, video, sound etc. In this project we evaluate utility of deep learning for network analysis, including classification of network topologies, anomaly detection, community detection and other areas.`,
      active: false
    },
  ]

  const [information, setInformation] = useState(defaultInformation)

  function toggleInfo(index) {
    const updInformation = information.map((info, i) => {
      info.active = index === i ? !info.active : info.active
      return info
    })

    setInformation(updInformation)
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
      
      <article className='information-blocks'>
        {
          information.map((info, index) => {
            return (
              <section className='information-block'>
                <h3 className='title-medium'>
                  {info.title}
                  <button className='toggle-info' onClick={() => toggleInfo(index)}>
                    { info.active ? Parser('&times;') : '+' }
                  </button>
                </h3>

                {
                  info.active ?
                    <span className="description special">
                      {Parser(info.description)}
                    </span>
                    :
                    ''
                }
              </section>
            )
          })
        }
      </article>
    </main>
  )
}

export default Collaborations
