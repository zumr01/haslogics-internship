import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a
        target='blank'
        href='https://www.facebook.com/zainumer147'
      >
        <FaFacebookSquare className='icons' />
      </a>
      <a
        target='blank'
        href='https://www.instagram.com/zain_umr/'
      >
        <FaInstagramSquare className='icons' />
      </a>
      <a
        target='blank'
        href='https://www.linkedin.com/in/zain-umer-b5712520a/'
      >
        <FaLinkedin className='icons' />
      </a>
      <a
        target='blank'
        href='https://github.com/zumr01'
      >
        <FaGithubSquare className='icons' />
      </a>
    </div>
  );
};

export default Footer;
