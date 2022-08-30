import { Link } from 'react-router-dom';

import '../../assets/styles/css/particles/header.css';

function Header() {
  return (
    <header className='header'>
      <h2>
        <Link to="/">ucomp</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
