import React from 'react';
import image from '../assets/zain.jpg';
const Cover = () => {
  return (
    <div className='cover-container'>
      <img
        className='cover-img'
        src={image}
        alt='img'
      />
    </div>
  );
};

export default Cover;
