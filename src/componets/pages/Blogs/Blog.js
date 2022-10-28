import { useEffect, useState } from 'react'
import Parser from 'html-react-parser'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import NoResult from '../../particles/NoResult'
import Preloader from '../../particles/Preloader'

import '../../../assets/styles/css/pages/blogs/blog.css'
import BlogNavigation from './components/BlogNavigation'

function Blog() {
  const [preloader, setPreloader] = useState(true)
  const [blogNavigation, setBlogNavigation] = useState({ next: null, previos: null })
  const [blog, setBlog] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setPreloader(true)

    const getBlogs = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/blog/get/${id}`

      axios(url)
        .then(content => {
          const { blog, next = null, previos = null } = content.data
          setBlog(blog)
          setBlogNavigation({ next, previos })
        })
        .catch(err => console.error(err))
        .finally(() => setPreloader(false))
    }

    getBlogs()
  }, [id])

  return <main className='blog-page'>
    {
      preloader ? (
        <>
          <Preloader height='40px' width='60%' />
          <Preloader height='75px' width='100%' />
          <Preloader height='75px' width='100%' />
        </>
      ) : (
        blog === null ?
        (
          <NoResult text='Can not find the blog.'/>
        ) : (
          <>
            <BlogNavigation navigation={blogNavigation}/>
            
            <h1 className='title'>{ blog.title }</h1>
            
            <section className='content'>
              { Parser(blog.content) }
            </section>
          </>
        ) 
      )
    }
  </main>
}

export default Blog
