import { Link } from 'react-router-dom'
import images from '../../../../assets/images/imgs'
import '../../../../assets/styles/css/pages/blogs/components/blog-navagition.css'

function BlogNavigation({ navigation: { next, previos } }) {
  return (
    <nav className='blog-navigation'>
      {
        previos ? (
          <Link 
            className='navigation-item arrow'
            to={'/blog/' + previos}>
              <img className='rotate' src={images.navigationArrow} alt='navigationArrow' />
          </Link>
        ) : ''
      }

      <Link 
        className='navigation-item'
        to={'/blogs'}>
          Back to blogs
      </Link>
      
      {
        next ? (
          <Link 
            className='navigation-item arrow'
            to={'/blog/' + next}>
              <img src={images.navigationArrow} alt='navigationArrow' />
          </Link>
        ) : ''
      }
    </nav>
  )
}

export default BlogNavigation
