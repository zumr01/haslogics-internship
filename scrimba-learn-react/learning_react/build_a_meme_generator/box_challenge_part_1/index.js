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

function App() {
  const [boxesArr, setBoxesArr] = React.useState(boxes);

  const displaySquare = boxesArr.map((item) => (
    <div
      className='box'
      key={item.id}
    ></div>
  ));
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */
  return (
    <main>
      <h1>Boxes will go here</h1>
      {displaySquare}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
