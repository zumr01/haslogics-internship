import React from 'react';
import logo from '../assets/images/troll-face.png';

const Header = () => {
  return (
    <header>
      <img
        className='header--logo'
        src={logo}
        alt='logo'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
