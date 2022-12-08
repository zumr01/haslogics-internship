import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Button = () => {
  return (
    <div className='button-container'>
      <a
        href='https://github.com/zumr01'
        target='_blank'
      >
        <button className='btn-github'>
          <FaGithubSquare className='social-icon' />
          Github
        </button>
      </a>
    </div>
  );
};

export default Button;
