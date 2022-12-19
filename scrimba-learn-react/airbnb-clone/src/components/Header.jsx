import React from 'react';
import logo from '../assets/airbnb-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <nav className='navBar'>
        <a href='#'>
          <img
            src={logo}
            alt='logo'
            className='logo'
          />
        </a>
      </nav>
    </div>
  );
};

export default Header;
