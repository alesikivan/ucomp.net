import '../../../../assets/styles/css/pages/publications/components/publication.css'

function Publication(props) {
  return <section className='publication'>
    <a 
      className={props.publication?.link ? 'description' : 'description non-active'} 
      href={props.publication?.link || '#'}
      target='_blank' 
      rel='noreferrer'>
      <b className='num'>{props.index + 1}.</b>
      {props.publication.title} ({props.publication?.year})
      {/* <span className='year'>{props.publication?.year}</span> */}
    </a>

    <div className='authors'>
      {
        props.publication.authors.map((author, i) => {
          return <span className='author' key={i}>{author}</span>
        })
      }
    </div>
  </section>
}

export default Publication