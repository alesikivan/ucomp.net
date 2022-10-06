import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Blog() {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getBlog = () => {
      const url = `${process.env.REACT_APP_SERVER_DATA}/blog/get/${id}`

      fetch(url)
        .then(data => data.json())
        .then(blog => setBlog(blog))
    }

    getBlog()
  })

  return <section className='blog'>
    <p>
      { blog ? blog.title : '' }
    </p>
  </section>
}

export default Blog
