import { useState, useEffect } from 'react'
import '../../assets/styles/css/pages/contact-us.css'
import checkEmail from '../../utils/form'

import Title from '../particles/Title'

function ContactUs() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isActive, setIsActive] = useState(false)

  function validate(email, message) {
    // Form validation
    const emailValidated = checkEmail(email.trim())
    const messageValidated = message.trim()

    return Boolean(emailValidated && messageValidated)
  }

  function sendMessage(event) {
    event.preventDefault()

    if (validate(email, message)) {
      alert('form sended')
      setEmail('')
      setMessage('')
    }
  }

  useEffect(() => {
    const result = validate(email, message)
    setIsActive(result)
  }, [email, message])

  return (
    <main className='contact-us-page'>
      <Title text='Contact us' />
      
      <span className='preview'>
        Feel free to ask some questions about the laboratory process or the possibility of cooperation
      </span>

      <form className='contact-us-form'>
        <input
          onChange={event => setEmail(event.target.value)} 
          value={email} 
          name='email' 
          type="email" 
          placeholder='Email' />

        <textarea 
          onChange={event => setMessage(event.target.value)} 
          value={message} 
          name='email'  
          placeholder='Your awesome message'></textarea>
        
        <button 
          onClick={sendMessage}
          className={isActive ? 'active' : ''}>
            Send your message
          </button>
      </form>
    </main>
  )
}

export default ContactUs
