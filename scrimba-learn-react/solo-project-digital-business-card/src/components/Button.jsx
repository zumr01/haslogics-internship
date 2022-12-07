import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Button = () => {
  return (
    <div className='button-container'>
      <button className='btn-email'>
        <FaEnvelope className='social-icon' /> Email
      </button>
      <button className='btn-linkedin'>
        <FaLinkedin className='social-icon' /> LinkedIn
      </button>
    </div>
  );
};

export default Button;
