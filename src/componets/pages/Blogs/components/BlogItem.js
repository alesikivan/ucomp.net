import { useNavigate } from 'react-router-dom';
import images from '../../../../assets/images/imgs'

function BlogItem({ blog }) {
  let navigate = useNavigate()
  
  return (
    <section onClick={() => navigate('/blogs/' + blog._id)} className='blog'>
      <img 
        className={blog.image === '' ? 'default' : ''}
        src={blog.image ? blog.image : images.preview} 
        alt="blog" />
      
      <span className='date'>
        {new Date(blog.dateCreate).toLocaleDateString()}
      </span>
      
      <h4>{blog.title}</h4>
    </section>
  )
}

export default BlogItem
