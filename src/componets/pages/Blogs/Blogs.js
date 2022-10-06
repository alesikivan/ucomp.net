import BlogItem from './components/BlogItem'
import Title from '../../particles/Title'

import '../../../assets/styles/css/pages/blogs/blogs.css'
import { useEffect, useState } from 'react'

function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogs = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/blog/get`

      fetch(url)
        .then(data => data.json())
        .then(data => setBlogs(data.blogs))
    }

    getBlogs()
  })

  return <main>
    <Title text='Blogs' />

    <article className='blogs'>
      {
        blogs.map((blog, i) => <BlogItem key={i} blog={blog} />)
      }
    </article>
  </main>
}

export default Blogs
