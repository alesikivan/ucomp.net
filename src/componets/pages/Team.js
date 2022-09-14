import { useState } from 'react'
import '../../assets/styles/css/pages/team.css'
import NoResult from '../particles/NoResult'
import Search from '../particles/Search'
import Title from '../particles/Title'

function Team() {
  const descriptionLimit = 225

  let defaultMembers = [
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/11/sobolevsky_portrait-2.jpg',
      username: 'Prof. Stanislav Sobolevsky',
      titles: [ 'Lab Director, PhD, DrSc', 'Associate Professor Of Practice at NYU', 'Research Affiliate at the MIT Senseable City Lab' ],
      description: 'Dr. Sobolevsky holds PhD (1999) and Doctor of Science habilitation degree (2009) in Mathematics. Dr. Sobolevsky teaches data science, machine learning and networks analysis and studies human behavior in urban context through its digital traces: spatio-temporal big data created by various aspects of human activity – social media, cell phone records, vehicle/vessel GPS traces, public service requests, credit card transactions and other. Authored over a 100 of research publications in top-tier journals and conferences, including Nature’s Scientific Reports, PNAS, Physical Review E, PLOS ONE and others. His applied projects on transportation modeling, trajectory mining, anomaly, pattern and vulnerability detection in temporal urban networks are supported by industrial partners and foundations including US Department Of Energy, US Department Of Transportation, National Geospatial Intelligence Agency, Lockheed Martin, Future Cities Catapult, Arcadis. His prior research at MIT was supported by Ericsson, BBVA, Orange, British Telecom, Liberty Mutual and other industrial partners.'
    },
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Chaopgui2.png',
      username: 'Prof. Chaogui Kang',
      titles: [ 'Visiting scholar – Associate Professor At Wuhan University' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/picture-for-web.png',
      username: 'Enwei Zhou',
      titles: [ 'Visiting scholar', 'PhD student at Singhua University, China' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/maarten31.jpg',
      username: 'Maarten Vanhoof',
      titles: [ 'Visiting scholar', 'PhD student at Newcastle University, UK', 'Associated researcher at Orange Labs, France' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2017/12/philipp2.png',
      username: 'Philipp Kats',
      titles: [ 'Part-time researcher', 'Data scientist at StreetEasy' ],
      description: ''
    }, 
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Shivam.png',
      username: 'Shivam Kumar Pathak',
      titles: [ 'Graduate research assistant' ],
      description: ''
    },
    {
      image: 'https://ucomp.net/wp-content/uploads/2019/10/Chinmay.jpg',
      username: 'Chinmay Singhal',
      titles: [ 'Graduate research assistant' ],
      description: ''
    },
  ]

  // Flag to display full description
  defaultMembers = defaultMembers.map(member => {
    member.hiddenText = member.description?.length > descriptionLimit
    return member
  })
  
  const [members, setMembersValue] = useState(defaultMembers)
  const [searchValue, setSearchValue] = useState('')

  function toggleDescription(index) {
    const _members = members.map((member, i) => {
      if (i === index) {
        member.hiddenText = !member.hiddenText
      }

      return member
    })

    setMembersValue(_members)
  }

  function checkEntries(string1, string) {
    return string1.toLowerCase().includes(string.toLowerCase())
  }

  function membersFinder(searchQuery) {
    setSearchValue(searchQuery.toLowerCase())
  }

  return (
    <main>
      <Title text="complexity lab team"/>
      <br />
      <Search 
        onChangeHandler={membersFinder} 
        onClickHandler={membersFinder} 
        placeholder="Search by team"/>
        
      <article className='team'>
        {
          members.map((member, index) => {
            return checkEntries(member.username, searchValue) ?
              <section className='member' key={index}>
                <div className='profile-image'>
                  <img src={member.image} alt='profile'/>
                </div>
                
                <div className='profile-info'>
                  <h2 className='name'>{member.username}</h2>
                  
                  <div className='job-title'>
                      {
                        member.titles.map((title, i) => 
                          <span key={i}>{title}</span>)
                      }
                  </div>

                  <span className='description'>
                    {
                      member.hiddenText ?
                        <>
                          {`${member.description.slice(0, descriptionLimit)}... `}
                          <button onClick={() => toggleDescription(index)} className='toggle-info'>more</button>
                        </>
                        :
                        <>
                        { member.description }
                        {
                          member.description?.length > descriptionLimit ?
                          <button onClick={() => toggleDescription(index)} className='toggle-info'>less</button> 
                          :
                          ''
                        }
                        </>
                    }
                  </span>
                </div>
              </section>
              :
              ''
          })
        }
      </article>
      
      {
        !members.some((member) => checkEntries(member.username, searchValue)) ?
          <NoResult text="Team members not found" />
          :
          ''
      }
    </main>
  )
}

export default Team
