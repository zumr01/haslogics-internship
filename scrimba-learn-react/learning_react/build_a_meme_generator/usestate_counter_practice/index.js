'use strict';

function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  const [count, setValue] = React.useState(0);
  // console.log(count);

  function increase() {
    return setValue(count + 1);
  }

  function decrease() {
    return setValue(count > 0 ? count - 1 : 0);
  }
  return (
    <div className='counter'>
      <button
        onClick={decrease}
        className='counter--minus'
      >
        –
      </button>
      <div className='counter--count'>
        <h1>{count}</h1>
      </div>
      <button
        onClick={increase}
        className='counter--plus'
      >
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
