'use strict';

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function List() {
  return (
    <ol>
      <li>React structurs the view layer of app</li>
      <li>Reusable components</li>
      <li>Very popular in industry</li>
    </ol>
  );
}

ReactDOM.render(<List />, document.getElementById('root'));
