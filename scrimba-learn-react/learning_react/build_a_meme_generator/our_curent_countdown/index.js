'use strict';

function App() {
  const thingsArray = ['Thing 1', 'Thing 2'];

  // const [things, setThings] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThingText);
    console.log(thingsArray);

    // const newThingText = `Thing ${things.length + 1}`;
    // setThings((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
