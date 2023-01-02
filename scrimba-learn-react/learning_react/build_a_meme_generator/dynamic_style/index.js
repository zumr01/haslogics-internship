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

function App(props) {
  const [boxesArr, setBoxesArr] = React.useState(boxes);

  // Challenge: use a ternary to determine the backgroundColor.
  // If darkMode is true, set it to "#222222"
  // If darkMode is false, set it to "#cccccc"

  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc',
  };

  const displaySquare = boxesArr.map((item) => (
    <div
      className='box'
      key={item.id}
      style={styles}
    ></div>
  ));

  return (
    <main className='container'>
      <h1>Dynamic Styles</h1>
      {displaySquare}
    </main>
  );
}

ReactDOM.render(<App darkMode={true} />, document.getElementById('root'));
