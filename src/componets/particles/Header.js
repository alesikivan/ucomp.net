import { Link } from 'react-router-dom';
import images from '../../assets/images/imgs';

import '../../assets/styles/css/particles/header.css';

function Header() {
  return (
    <header className='main-header'>
      <div className='cover'>
      <Link to="/" className='logo'>
        <img src={images.logo} alt="logo"/>
      </Link>

      <ul>
        <li>
          <Link to="team">team</Link>
        </li>
        <li>
          <Link to="publications">publications</Link>
        </li>
        <li>
          <Link to="collaborations">collaborations</Link>
        </li>
        <li>
          <Link to="blogs">blogs</Link>
        </li>
      </ul>

      <Link to="contact-us" className='special-link'>Contact us</Link>
      </div>
    </header>
  );
}

export default Header;
