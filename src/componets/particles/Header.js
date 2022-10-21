import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images/imgs';

import '../../assets/styles/css/particles/header.css';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
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
        <button onClick={() => setIsMenuActive(!isMenuActive)} className='menu-button'>
          <img src={isMenuActive ? images.close : images.menu} alt="menu"/>
        </button>
      </div>

      {
        isMenuActive ? (
          <section className='burger-menu'>
            <ul>
              <li onClick={() => setIsMenuActive(!isMenuActive)}>
                <Link to="team">team</Link>
              </li>
              <li onClick={() => setIsMenuActive(!isMenuActive)}>
                <Link to="publications">publications</Link>
              </li>
              <li onClick={() => setIsMenuActive(!isMenuActive)}>
                <Link to="collaborations">collaborations</Link>
              </li>
              <li onClick={() => setIsMenuActive(!isMenuActive)}>
                <Link to="blogs">blogs</Link>
              </li>
              <li onClick={() => setIsMenuActive(!isMenuActive)}>
                <Link to="contact-us">contact us</Link>
              </li>
            </ul>
          </section>
        ) : ''
      }
    </header>
  );
}

export default Header;
