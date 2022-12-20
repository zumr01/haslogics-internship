import React from 'react';
import photoGallery from '../images/photo-gallery.png';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='photo-container'>
        <img
          src={photoGallery}
          alt='photos'
          className='photo-gallery'
        />
      </div>

      <div className='hero-content'>
        <h1 className='hero-tittle'>Online Experiences</h1>
        <p className='hero-para'>
          Join unique interactive activities led by one of a kind hosts all
          without leaving home. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis, accusantium.
        </p>
      </div>
    </section>
  );
};

export default Hero;
