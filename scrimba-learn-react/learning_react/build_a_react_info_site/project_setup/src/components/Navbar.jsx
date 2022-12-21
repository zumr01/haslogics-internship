import React from 'react';
import logo from './react-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a
        className='logo-link'
        href=''
      >
        <img
          className='logo'
          src={logo}
          alt=''
        />
        <h1 className='brand-name'>ReactFacts</h1>
      </a>
      <h2 className='nav-title'>React Course - Project 1</h2>
    </nav>
  );
};

export default Navbar;
