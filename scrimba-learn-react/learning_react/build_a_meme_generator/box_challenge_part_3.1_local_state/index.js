'use strict';

const boxes = [
  {
    id: 1,
    on: true,
  },
  {
    id: 2,
    on: false,
  },
  {
    id: 3,
    on: true,
  },
  {
    id: 4,
    on: true,
  },
  {
    id: 5,
    on: false,
  },
  {
    id: 6,
    on: false,
  },
];

const Box = (props) => {
  /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   *
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   *
   * Goal: clicking each box should toggle it on and off.
   */

  const [incomingProps, setIncommingProps] = React.useState(props.on);
  function toggleOnOff() {
    setIncommingProps((prevProps) => !prevProps);
  }

  const styles = {
    backgroundColor: incomingProps ? '#222222' : 'transparent',
  };
  return (
    <div
      className='box'
      style={styles}
      onClick={toggleOnOff}
    ></div>
  );
};

function App() {
  const [boxesArr, setBoxesArr] = React.useState(boxes);

  const displaySquare = boxesArr.map((item) => (
    <Box
      key={item.id}
      on={item.on}
    />
  ));

  return (
    <main className='container'>
      <h1>Flipping Boxes (Local State)</h1>
      {displaySquare}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
