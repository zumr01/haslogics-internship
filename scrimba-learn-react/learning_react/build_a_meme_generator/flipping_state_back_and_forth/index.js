'use strict';

function App() {
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function change() {
    return setIsGoingOut((prevValue) => !prevValue);
  }

  return (
    <div className='state'>
      <h1 className='state--title'>Do I feel like going out tonight?</h1>
      <div
        onClick={change}
        className='state--value'
      >
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
