'use strict';

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
  - Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
  return (
    <header>
      <nav className='nav-bar'>
        <img
          className='logo'
          src='./react-logo.png'
          alt='logo'
        />
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className='container'>
      <h1 className='heading'>I'm excited to learn React</h1>
      <ol className='ordered-list'>
        <li>React structurs the view layer of app</li>
        <li>Reusable components</li>
        <li>Very popular in industry</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <div className='main-footer'>
      <footer>
        <small>© 20xx development. All rights reserved</small>
      </footer>
    </div>
  );
}

function Page() {
  return (
    <div className='main'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
