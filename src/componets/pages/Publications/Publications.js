import { useEffect, useState } from 'react'
import axios from 'axios'

import Search from '../../particles/Search'
import Title from '../../particles/Title'
import Publication from './components/Publication'
import NoResult from '../../particles/NoResult'

import '../../../assets/styles/css/pages/publications/publications.css'
import Preloader from '../../particles/Preloader'

function Publications() {
  const [publications, setPublications] = useState([])
  const [preloader, setPreloader] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  
  useEffect(() => {
    const getPublications = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/publication/get`
      
      axios(url)
      .then(content => setPublications( content.data.publications ))
      .catch(err => console.error(err))
      .finally(() => setPreloader(false))
    }
    
    getPublications()
  }, [])

  function checkEntries(array, string) {
    return array.join().toLowerCase().includes(string.toLowerCase())
  }

  const publicationsFinder = query => setSearchQuery(query)

  return (
    <main>
      <Title text='Publications' />
      <br />
      <Search
        onClickHandler={publicationsFinder}
        onChangeHandler={publicationsFinder}
        placeholder='Search publications by author' />

      {
        preloader ? (
          <>
            <Preloader height='85px' width='100%' />
            <Preloader height='85px' width='100%' />
            <Preloader height='85px' width='100%' />
            <Preloader height='85px' width='100%' />
          </>
        ) : (
          <>
            <article className='publications'>
              {
                publications.map((publication, index) => {
                  return checkEntries(publication.authors, searchQuery) ?
                      <Publication 
                        key={index}
                        index={index}
                        publication={publication} />
                      :
                      ''
                })
              }
            </article>
            {
              !publications.some((publication) => checkEntries(publication.authors, searchQuery)) ?
                <NoResult text='Publications not found' />
                :
                ''
            }
                </>
              )
            }
    </main>
  )
}

export default Publications