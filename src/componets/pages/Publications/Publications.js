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
    },
    {
      desription: 'Quantifying the benefits of vehicle pooling with shareability networks. Proceedings of the National Academy of Sciences (PNAS), 111 (37): 201403657',
      year: 2014,
      authors: ['Santi P.', 'Resta G.', 'Szell M.', 'Sobolevsky S.', 'Strogatz S. H.', 'Ratti C.'],
      link: 'http://www.pnas.org/content/early/2014/08/27/1403657111.short'
    },
    {
      desription: 'A general optimization technique for high quality community detection in complex networks. Phys. Rev. E 90 (1), 012811',
      year: 2014,
      authors: ['Sobolevsky S.', 'Campari R.' , 'Belyi A.' , 'Ratti C.'],
      link: 'http://link.aps.org/doi/10.1103/PhysRevE.90.012811'
    },
    {
      desription: 'Delineating geographical regions with networks of human interactions in an extensive set of countries. PLoS ONE 8 (12), e81707',
      year: 2013,
      authors: ['Sobolevsky S.', 'Szell M.', 'Campari R.', 'Couronne T.', 'Smoreda Z.', 'Ratti C.'],
      link: 'http://www.plosone.org/article/info:doi/10.1371/journal.pone.0081707'
    },
    {
      desription: 'Exploring Universal Patterns in Human Home-Work Commuting from Mobile Phone Data. PLoS ONE 9(6): e96180. doi:10.1371/journal.pone.0096180',
      year: 2014,
      authors: ['Sobolevsky S.', 'Kung K.' , 'Greco K.', 'Ratti C.'],
      link: 'http://www.plosone.org/article/info:doi/10.1371/journal.pone.0096180'
    },
    {
      desription: 'A new insight into land use classification based on aggregated mobile phone data. International Journal of Geographical Information Science, 28 (9): 1-20',
      year: 2014,
      authors: ['Pei T.', 'Sobolevsky S.(*corresp)', 'Ratti C.', 'Shaw S. L.', 'Li T.', 'Zhou C.'],
      link: 'http://www.tandfonline.com/doi/abs/10.1080/13658816.2014.913794#.VC9NTkITB08'
    },
    {
      desription: 'The impact of social segregation on human mobility in developing and industrialized regions. EPJ Data Science, 3(1), 6',
      year: 2014,
      authors: ['Amini A.', 'Kung K.', 'Kang C.', 'Sobolevsky S.(*corresp)', 'Ratti C.'],
      link: 'http://www.epjdatascience.com/content/3/1/6/abstract'
    },
    {
      desription: 'Geo-located Twitter as proxy for global mobility patterns. Cartography and Geographic Information Science, 41(3), 260-271.',
      year: 2014,
      authors: ['Hawelka B.', 'Sitko I.', 'Beinat E.', 'Sobolevsky S.', 'Kazakopoulos P.', 'Ratti C.'],
      link: 'http://www.tandfonline.com/doi/abs/10.1080/15230406.2014.890072#.VDBNPUITB08'
    },
    {
      desription: 'Estimating human trajectories and hotspots through mobile phone data. Computer Networks, 64, 296-307.',
      year: 2014,
      authors: ['Hoteit S.', 'Secci S.', 'Sobolevsky S.', 'Ratti C.', 'Pujolle G.'],
      link: 'http://www.sciencedirect.com/science/article/pii/S1389128614000656'
    },
    {
      desription: '“An analysis of visitors’ behavior in The Louvre Museum: a study using Bluetooth data” Environment and Planning B: Planning and Design 41(6) 1113 – 1131, doi:10.1068/b130047p',
      year: 2014,
      authors: ['Yoshimura Y.', 'Sobolevsky S.', 'Ratti C.', 'Girardin F.', 'Carrascal J. P.', 'Blat J.', 'Sinatra R.'],
      link: 'http://envplan.com/abstract.cgi?id=b130047p'
    },
    {
      desription: '“Uncovering the Directional Heterogeneity of an Aggregated Mobile Phone Network.” Transactions in GIS 18, no. S1',
      year: 2014,
      authors: ['Tao P.', 'Sobolevsky S.', 'Ratti C.', 'Amini A.', 'Zhou C.'],
      link: ''
    },
    {
      desription: 'Exploring human movements in Singapore: A comparative analysis based on mobile phone and taxicab usages. In Proceedings of the 2nd ACM SIGKDD International Workshop on Urban Computing (p. 1). ACM.',
      year: 2013,
      authors: ['Kang C.', 'Sobolevsky S.', 'Liu Y.', 'Ratti C.'],
      link: 'http://dl.acm.org/citation.cfm?id=2505826'
    },
    {
      desription: 'Mining Urban Performance: Scale-Independent Classification of Cities Based on Individual Economic Transactions. ASE BigDataScience 2014 (Stanford, CA)',
      year: 2014,
      authors: ['Sobolevsky S.'],
      link: 'http://ase360.org/handle/123456789/48, http://arxiv.org/abs/1405.4301'
    },
    {
      desription: 'Money on the Move: Big Data of Bank Card Transactions as the New Proxy for Human Mobility Patterns and Regional Delineation. The Case of Residents and Foreign Visitors in Spain. 2014 IEEE International Congress on Big Data (Anchorage, AK)',
      year: 2014,
      authors: ['Sobolevsky S.'],
      link: 'tp=&arnumber=6906771&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D6906771'
    },
    {
      desription: 'Towards a Comparative Science of Cities: Using Mobile Traffic Records in New York, London, and Hong Kong. In Computational Approaches for Urban Environments (pp. 363-387). Springer International Publishing',
      year: 2015,
      authors: ['Grauwin S.', 'Sobolevsky S.', 'Moritz S.', 'Gódor I.', 'Ratti C.'],
      link: 'http://link.springer.com/chapter/10.1007/978-3-319-11469-9_15'
    },
    {
      desription: 'Urban magnetism through the lens of geo-tagged photography. EPJ Data Science, 4(1), 1-17.',
      year: 2015,
      authors: ['Paldino S.', 'Bojic I.', 'Sobolevsky S. (*corresp.)', 'Ratti C.', 'González M. C.'],
      link: 'https://link.springer.com/article/10.1140/epjds/s13688-015-0043-3'
    },
    {
      desription: 'Uncovering urban temporal patterns from geo-tagged photography. PloS one, 11(12), e0165753.',
      year: 2016,
      authors: ['Paldino S.', 'Kondor D.', 'Bojic I.', 'Sobolevsky S.', 'Ratti C.', 'González M. C.'],
      link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0165753'
    },
    {
      desription: 'Urban association rules: uncovering linked trips for shopping behavior. Environment and Planning B: Planning and Design, 0265813516676487.',
      year: 2016,
      authors: ['Yoshimura Y.', 'Sobolevsky S.', 'Bautista Hobin J. N.', 'Ratti C.', 'Blat J.'],
      link: 'http://journals.sagepub.com/doi/abs/10.1177/0265813516676487'
    },
    {
      desription: 'Cities through the Prism of People’s Spending Behavior. PloS one, 11(2): e0146291.',
      year: 2016,
      authors: ['Sobolevsky S.', 'Sitko I.', 'Combes R. T. D.', 'Hawelka B.', 'Ariaz J. M.', 'Ratti C.'],
      link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0146291'
    },
    {
      desription: 'Revisiting street intersections using slot-based systems. PloS one, 11(3), e0149607.',
      year: 2016,
      authors: ['Tachet R.', 'Santi P.', 'Sobolevsky S.', 'Reyes-Castro L. I.', 'Frazzoli E.', 'Helbing D.', 'Ratti C.'],
      link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0149607'
    },
    {
      desription: 'Scaling of foreign attractiveness for countries and states. Applied Geography, 73, 47-52.',
      year: 2016,
      authors: ['Sobolevsky S.', 'Bojic I.', 'Belyi A.', 'Ratti C.'],
      link: 'http://www.sciencedirect.com/science/article/pii/S0143622816301370'
    },
    {
      desription: 'Analysis of pedestrian behaviors through non-invasive Bluetooth monitoring. Applied geography, 81, 43-51.',
      year: 2017,
      authors: ['Yoshimura Y.', 'Amini A.', 'Sobolevsky S.', 'Blat J.', 'Ratti C.'],
      link: 'http://www.sciencedirect.com/science/article/pii/S014362281730125X'
    },
    {
      desription: 'Twitter Activity Timeline as a Signature of Urban Neighborhood. arXiv preprint arXiv:1707.06122.',
      year: 2017,
      authors: ['Sobolevsky S.', 'Kats P.', 'Qian C.', 'Kontokosta C.'],
      link: 'https://arxiv.org/abs/1707.06122'
    },
    {
      desription: 'Identifying and modeling the structural discontinuities of human interactions. Scientific Reports, 7.',
      year: 2017,
      authors: ['Grauwin S.', 'Szell M.', 'Sobolevsky S. (*corresp.)', 'Hövel P.', 'Simini F.', 'Vanhoof M.', 'Smoreda Z.', 'Barabási A.L.', 'Ratti C.'],
      link: 'https://www.nature.com/articles/srep46677'
    },
    {
      desription: 'Structure of 311 service requests as a signature of urban location. PloS ONE. 12(10), e0186314.',
      year: 2017,
      authors: ['Wang L.', 'Qian C.', 'Kats P.', 'Kontokosta C.', 'Sobolevsky S. (*corresp.)'],
      link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0186314'
    },
    {
      desription: 'Socioeconomic characterization of regions through the lens of individual financial transactions. PLoS ONE 12(11): e0187031.',
      year: 2017,
      authors: ['Hashemian B.', 'Massaro E.', 'Bojic I.', 'Murillo Arias J.', 'Sobolevsky S.', 'Ratti C.'],
      link: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0187031'
    },
    {
      desription: 'Optimality Of Community Structure In Complex Networks. Presented At NetSci’2018, ICCS’2018.',
      year: 2017,
      authors: ['Sobolevsky S.', 'Belyi A.', 'Ratti C.'],
      link: 'https://arxiv.org/abs/1712.05110'
    }
  ]

  const publicationsFinder = query => setSearchQuery(query)

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
    </main>
  )
}

export default Publications