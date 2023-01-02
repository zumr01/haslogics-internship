'use strict';

function App() {
  const [value, func] = React.useState('Yess!');
  console.log(value);
  return (
    <div className='state'>
      <h1 className='state--title'>Is state important to know?</h1>
      <div className='state--value'>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
