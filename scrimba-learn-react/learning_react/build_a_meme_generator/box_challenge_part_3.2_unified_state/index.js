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
  // const [incomingProps, setIncommingProps] = React.useState(props.on);

  // function toggleOnOff() {
  //   setIncommingProps((prevProps) => !prevProps);
  // }

  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent',
  };
  return (
    <div
      className='box'
      style={styles}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
};

function App() {
  const [boxesArr, setBoxesArr] = React.useState(boxes);

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

  function toggle(id) {
    console.log(id);
  }

  const displaySquare = boxesArr.map((item) => (
    <Box
      key={item.id}
      id={item.id}
      on={item.on}
      handleClick={toggle}
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
