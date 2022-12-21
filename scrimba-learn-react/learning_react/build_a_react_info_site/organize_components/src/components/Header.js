import React from 'react';
import logo from './react-logo.png';

const Header = () => {
  return (
    <header>
      <nav className='nav-bar'>
        <img
          className='logo'
          src={logo}
          alt='logo'
        />
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
