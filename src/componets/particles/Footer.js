import '../../assets/styles/css/particles/footer.css';
import images from '../../assets/images/imgs'
import GoogleMap from './GoogleMap';

function Footer() {
  const address = 'Brooklyn, NY at 370 Jay Street, 12th Floor'
  const location = 'https://www.google.com/maps?z=16&q=370+jay+street,+12th+floor,+brooklyn,+ny,+11201'
  const number = '+1-646-997-0527'
  const email = 'info@ucomp.net'

  let year = new Date().getFullYear()
  year = year === 2022 ? year : `2022 - ${year}`

  return (
    <footer className='main-footer'>

      <article className='cover'>
        <section className='info'>
          <h4>urban complexity lab</h4>
          <ul>
            <li>
              <a href={`mailto:${email}`}>
                <img src={images.email} alt='contact'/>
                <span>{email}</span>
              </a>
            </li>          
            <li>
              <a href={`tel:${number}`}>
                <img src={images.phone} alt='contact'/>
                <span>{number}</span>
              </a>
            </li>          
            <li>
              <a target='_blank' rel="noreferrer" href={location}>
                <img src={images.location} alt='contact'/>
                <span>{address}</span>
              </a>
            </li>
          </ul>
        </section> 
      </article>
            
      <article className='map'>
        <GoogleMap />
      </article> 
      
      <hr />

      <article>
        <span className='description'>
          Built using React by <span className='line'>SOCOS Team</span> &copy;{year}
        </span>
      </article>
    </footer>
  );
}

export default Footer;
