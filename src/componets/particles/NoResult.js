import '../../assets/styles/css/particles/no-result.css'

function NoResult(props) {
  return <div className='no-result-message'>
    <span>{props.text}</span>
  </div>
}

export default NoResult