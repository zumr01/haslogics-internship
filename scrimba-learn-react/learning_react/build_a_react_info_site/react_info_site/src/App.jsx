import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [nightMode, setNightMode] = React.useState({
    color: false,
  });
  return (
    <div className='container'>
      <Navbar darkMode={nightMode} />
      <Main />
    </div>
  );
}

export default App;
