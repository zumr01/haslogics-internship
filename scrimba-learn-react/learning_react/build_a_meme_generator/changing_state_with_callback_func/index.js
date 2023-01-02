'use strict';

function App() {
  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  const [count, setCount] = React.useState(0);
  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  // console.log(count);

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
