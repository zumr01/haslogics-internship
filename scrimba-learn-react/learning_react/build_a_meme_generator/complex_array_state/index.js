'use strict';

/**
 * Challenge: Convert the code below to use an array
 * held in state instead of a local variable. Initialize
 * the state array with the same 2 items below
 *
 * Don't worry about fixing `addItem` quite yet.
 */
function App() {
  /**
   * Challenge: See if you can do it all again by yourself :)
   */

  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    return setThingsArray((prevThingsArray) => [
      ...prevThingsArray,
      `Thing ${prevThingsArray.length + 1}`,
    ]);
  }

  const elements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {elements}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
