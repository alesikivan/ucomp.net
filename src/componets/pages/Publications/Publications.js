import { useState } from 'react'
import '../../../assets/styles/css/pages/publications/publications.css'
import Search from '../../particles/Search'
import Title from '../../particles/Title'
import Publication from './components/Publication'
import NoResult from '../../particles/NoResult'

function Publications() {
  const [searchQuery, setSearchQuery] = useState('')

  function checkEntries(array, string) {
    return array.join().toLowerCase().includes(string.toLowerCase())
  }

  const publications = [
    {
      desription: 'Redrawing the map of Great Britain from a network of human interactions. PLoS ONE, Vol.12(5), e14248',
      year: 2010,
      authors: ['Ratti C.', 'Sobolevsky S.', 'Calabrese F.', 'Andris C.', 'Reades J.', 'Martino M.', 'Claxton R.', 'Strogatz S.H.'],
      link: 'http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0014248#pone-0014248-g003'
    },
    {
      desription: 'Quantifying the benefits of vehicle pooling with shareability networks. Proceedings of the National Academy of Sciences (PNAS), 111 (37): 201403657',
      year: 2014,
      authors: ['Santi P.', 'Resta G.', 'Szell M.', 'Sobolevsky S.', 'Strogatz S. H.', 'Ratti C.'],
      link: 'http://www.pnas.org/content/early/2014/08/27/1403657111.short'
    },
    {
      desription: 'Delineating geographical regions with networks of human interactions in an extensive set of countries. PLoS ONE 8 (12), e81707',
      year: 2013,
      authors: ['Sobolevsky S.', 'Szell M.', 'Campari R.', 'Couronne T.', 'Smoreda Z.', 'Ratti C.'],
      link: 'http://www.plosone.org/article/info:doi/10.1371/journal.pone.0081707'
    },
    {
      desription: 'Mining Urban Performance: Scale-Independent Classification of Cities Based on Individual Economic Transactions. ASE BigDataScience 2014 (Stanford, CA)',
      year: 2014,
      authors: ['Sobolevsky S.'],
      link: 'http://ase360.org/handle/123456789/48, http://arxiv.org/abs/1405.4301'
    }
  ]

  function publicationsFinder(query) {
    setSearchQuery(query)
  }

  return (
    <main>
      <Title text='Publications' />
      <br />
      <Search 
        onChangeHandler={publicationsFinder}
        placeholder='Search publications by author' />

      <article className='publications'>
        {
          publications.map((publication, index) => {
            return checkEntries(publication.authors, searchQuery) ?
                <Publication 
                  key={index}
                  publication={publication} />
                :
                ''
          })
        }
      </article>

      {
        !publications.some((publication) => checkEntries(publication.authors, searchQuery)) ?
          <NoResult text='Publication not found' />
          :
          ''
      }
    </main>
  )
}

export default Publications