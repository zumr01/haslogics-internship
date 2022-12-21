'use strict';

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// this is a JSX syntax to write html to our page
const samplePage = (
  <div>
    <h1>What is React?</h1>
    <p>React is a library for building user interfaces.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button>Click Me</button>
  </div>
);

// here JSON.stringify() will convert the array of objects into simple JavaScript objects
document.getElementById('root').append(JSON.stringify(samplePage));
