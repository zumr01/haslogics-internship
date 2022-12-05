'use strict';

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
  return (
    <header>
      <nav>
        <img
          src='./react-logo.png'
          alt='logo'
          width='48px'
        />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className='container'>
      <h1>I'm excited to learn React</h1>
      <ol>
        <li>React structurs the view layer of app</li>
        <li>Reusable components</li>
        <li>Very popular in industry</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 20xx development. All rights reserved</small>
    </footer>
  );
}

function Page() {
  return (
    <div className='container'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
