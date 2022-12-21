'use strict';

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Page() {
  return (
    <div className='container'>
      <header>
        <nav>
          <img
            src='./react-logo.png'
            alt='logo'
            width='48px'
          />
        </nav>
        <h1>I'm excited to learn React</h1>
      </header>
      <ol>
        <li>React structurs the view layer of app</li>
        <li>Reusable components</li>
        <li>Very popular in industry</li>
      </ol>
      <footer>
        <small>© 20xx development. All rights reserved</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
