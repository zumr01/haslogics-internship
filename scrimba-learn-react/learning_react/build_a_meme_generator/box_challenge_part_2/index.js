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
  const styles = {
    backgroundColor: props.on ? '#222222' : '#cccccc',
  };
  return (
    <div
      className='box'
      style={styles}
    ></div>
  );
};

function App() {
  const [boxesArr, setBoxesArr] = React.useState(boxes);

  /**
   * Challenge part 2:
   * 1. Create a separate component called "Box" and
   *    replace the `div` above with our <Box /> components
   * 2. Pass the Box component a prop called `on` with the
   *    value of the same name from the `boxes` objects
   * 3. In the Box component, apply dynamic styles to determine
   *    the backgroundColor of the box. If it's `on`, set the
   *    backgroundColor to "#222222". If off, set it to "none"
   */

  const displaySquare = boxesArr.map((item) => (
    <Box
      key={item.id}
      on={item.on}
    />
  ));

  return (
    <main className='container'>
      <h1>Dynamic Styles</h1>
      {displaySquare}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
