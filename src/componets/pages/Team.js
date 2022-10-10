import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../assets/styles/css/pages/team.css'
import NoResult from '../particles/NoResult'
import Preloader from '../particles/Preloader'
import Search from '../particles/Search'
import Title from '../particles/Title'

function Team() {
  const [members, setMembers] = useState([])
  const [preloader, setPreloader] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const descriptionLimit = 225

  useEffect(() => {
    const getTeam = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/member/get`

      axios(url)
        .then(content => setMembers( addHiddenTextFlag(content.data.members) ))
        .catch(err => console.error(err))
        .finally(() => setPreloader(false))
    }

    getTeam()
  }, [])

  // Flag to display full description
  function addHiddenTextFlag(members) {
    return members.map(member => {
      member.hiddenText = member.description?.length > descriptionLimit
      return member
    })
  }

  function toggleDescription(index) {
    const _members = members.map((member, i) => {
      if (i === index) {
        member.hiddenText = !member.hiddenText
      }

      return member
    })

    setMembers(_members)
  }

  function checkEntries(string, substring) {
    return string.toLowerCase().includes(substring.toLowerCase())
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
        
      <article className={preloader ? 'team preloader-mode' : 'team'}>
        {
          preloader ? (
            <>
              <Preloader height='100px' width='100%' />
              <Preloader height='100px' width='100%' />
              <Preloader height='100px' width='100%' />
            </>
          ) : (
            <>
              {
                members.map((member, index) => {
                  return checkEntries(member.name, searchValue) ?
                    <section className='member' key={index}>
                      <div className='profile-image'>
                        <img src={member.image} alt='profile'/>
                      </div>
                      
                      <div className='profile-info'>
                        <h2 className='name'>{member.name}</h2>
                        
                        <div className='job-title'>
                            {
                              member.positions.map((title, i) => 
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
              {
                !members.some((member) => checkEntries(member.name, searchValue)) ?
                  <NoResult text="Team members not found" />
                  :
                  ''
              }
            </>
          )
        }
      </article>
    </main>
  )
}

export default Team
