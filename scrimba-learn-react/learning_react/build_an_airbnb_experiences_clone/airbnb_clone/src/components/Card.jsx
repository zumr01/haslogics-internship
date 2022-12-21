import React from 'react';
import star from '../images/star.png';

const Card = ({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else {
    badgeText = 'BUY';
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img
        className='card-img'
        src={`${img}`}
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
        <span className='gray'>
          {openSpots === 0 ? 'Not available' : country}
        </span>
      </div>
      <p className='description'>{title}</p>
      <p className='price'>
        <span className='bold-price'>From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
