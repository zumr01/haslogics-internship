'use strict';

function App() {
  const result = React.useState('Yes');
  console.log(result);
  return (
    <div className='state'>
      <h1 className='state--title'>Is state important to know?</h1>
      <div className='state--value'>
        <h1>{result[0]}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
