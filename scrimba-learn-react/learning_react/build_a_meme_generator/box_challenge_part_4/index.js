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

  function toggle(id) {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     *
     * Make sure not to directly modify state!
     *
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
    setBoxesArr((prevBoxesArr) => {
      const newBoxesArr = [];
      for (let i = 0; i < prevBoxesArr.length; i++) {
        const currentBoxesArr = prevBoxesArr[i];
        if (prevBoxesArr[i].id === id) {
          const updateBoxesArr = {
            ...currentBoxesArr,
            on: !currentBoxesArr.on,
          };
          newBoxesArr.push(updateBoxesArr);
        } else {
          newBoxesArr.push(currentBoxesArr);
        }
      }
      return newBoxesArr;
    });
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
