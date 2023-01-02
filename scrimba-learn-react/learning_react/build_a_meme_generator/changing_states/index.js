'use strict';

function App() {
  const [isImportant, setIsImportant] = React.useState('Yess!');
  console.log(isImportant);

  const update = () => setIsImportant('No');

  return (
    <div className='state'>
      <h1 className='state--title'>Is state important to know?</h1>
      <div
        onMouseOver={update}
        className='state--value'
      >
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
