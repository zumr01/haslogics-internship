import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [nightMode, setNightMode] = React.useState(false);

  function handleChange() {
    setNightMode((prevMode) => !prevMode);
  }
  return (
    <div className='app'>
      <div className='container'>
        <Navbar
          toggleDarkMode={handleChange}
          darkMode={nightMode}
        />
        <Main darkMode={nightMode} />
      </div>
    </div>
  );
}

export default App;
