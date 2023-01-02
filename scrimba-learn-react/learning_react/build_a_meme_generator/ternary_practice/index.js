'use strict';

function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = false;

  let answer = isGoingOut ? 'Yes' : 'No'; // Use ternary here

  return (
    <div className='state'>
      <h1 className='state--title'>Do I feel like going out tonight?</h1>
      <div className='state--value'>
        <h1>{answer}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
