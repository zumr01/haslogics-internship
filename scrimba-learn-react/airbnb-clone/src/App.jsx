import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import data from './data';

function App() {
  console.log(data);
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        title={item.title}
        reviewCount={item.stats.reviewCount}
        price={item.price}
        country={item.location}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className='App'>
      <Header />
      <Hero />
      <div className='card-section'>{card}</div>
    </div>
  );
}

export default App;

// img={img1}
// rating='5.0'
// reviewCount={6}
// country='USA'
// title='Life Lessons with Katie Zaferes'
// price={136}
