import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import img1 from './assets/card-1.png';
import img2 from './assets/card-2.png';
// import img3 from './assets/card-3.png';
function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <div className='card-section'>
        <Card
          img={img1}
          rating='5.0'
          reviewCount={6}
          country='USA'
          title='Life Lessons with Katie Zaferes'
          price={136}
        />
        <Card
          img={img2}
          rating='5.0'
          reviewCount={30}
          country='USA'
          title='Learn wedding photography'
          price={125}
        />
        <Card
          img={img1}
          rating='4.8'
          reviewCount={2}
          country='USA'
          title='Group Mountain Biking'
          price={50}
        />
      </div>
    </div>
  );
}

export default App;
