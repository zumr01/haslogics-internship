import React from 'react';
import image from './business.jpg';
const Cover = () => {
  return (
    <div className='image-container'>
      <img
        className='cover-image'
        src={image}
        alt='img'
      />
    </div>
  );
};

export default Cover;
