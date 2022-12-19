import React from 'react';
import star from '../assets/star.png';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className='card'>
      {/* <button className='btn-card'>sold out</button> */}
      <img
        className='card-img'
        src={img}
        alt='card img'
      />
      <div className='content'>
        <img
          src={star}
          alt='star'
          className='star'
        />
        <span className='rating'>{rating}</span>
        <span className='gray'>({reviewCount}) • </span>
        <span className='gray'>{country}</span>
      </div>
      <p className='description'>{title}</p>
      <p className='price'>
        <span className='bold-price'>From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
