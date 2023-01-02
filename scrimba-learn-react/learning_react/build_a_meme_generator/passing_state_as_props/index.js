'use strict';

const Count = ({ number }) => {
  return (
    <div className='counter--count'>
      <h1>{number}</h1>
    </div>
  );
};

// export default Count;

function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */
  return (
    <div className='counter'>
      <button
        className='counter--minus'
        onClick={subtract}
      >
        –
      </button>
      <Count number={count} />
      <button
        className='counter--plus'
        onClick={add}
      >
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
