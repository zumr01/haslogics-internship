import React from 'react';
import About from './About';
import Button from './Button';
import Cover from './Cover';
import Footer from './Footer';
import Info from './Info';
import Interest from './Interest';

const Card = () => {
  return (
    <div className='card-container'>
      <Cover />
      <Info />
      <Button />
      <About />
      <Interest />
      <Footer />
    </div>
  );
};

export default Card;
