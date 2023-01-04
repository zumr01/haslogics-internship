import React from 'react';
import star from '../images/star.png';

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else {
    badgeText = 'BUY';
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img
        className='card-img'
        src={`${props.coverImg}`}
        alt='card img'
      />
      <div className='content'>
        <img
          src={star}
          alt='star'
          className='star'
        />
        <span className='rating'>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) • </span>
        <span className='gray'>
          {props.openSpots === 0 ? 'Not available' : props.country}
        </span>
      </div>
      <p className='description'>{props.title}</p>
      <p className='price'>
        <span className='bold-price'>From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
