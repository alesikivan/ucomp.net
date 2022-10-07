import axios from 'axios'
import { useEffect, useState } from 'react'

import BlogItem from './components/BlogItem'
import Title from '../../particles/Title'
import NoResult from '../../particles/NoResult'
import Preloader from '../../particles/Preloader'

import '../../../assets/styles/css/pages/blogs/blogs.css'

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    const getBlogs = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/blog/get`

      axios(url)
        .then(content => setBlogs(content.data.blogs))
        .catch(err => console.error(err))
        .finally(() => setPreloader(false))
    }

    getBlogs()
  }, [])

  return <main>
  <Title text='Blogs' />

    {
      preloader ? (
        <article className='blogs preloader-blogs'>
          <Preloader height='300px' width='35%' />
          <Preloader height='300px' width='35%' />
          <Preloader height='300px' width='35%' />
          <Preloader height='300px' width='35%' />
        </article>
      ) : (
        blogs.length > 0 ?
        (
          <article className='blogs'>
            {
              blogs.map((blog, i) => <BlogItem key={i} blog={blog} />)
            }
          </article>
        ) : (
          <>
            <br />
            <NoResult text='Can not find blogs'/>
          </>
        )
      )
    }
  </main>
}

export default Blogs
