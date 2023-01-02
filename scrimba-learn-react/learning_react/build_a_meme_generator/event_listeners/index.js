'use strict';

function App() {
  function someText() {
    console.log('I was clicked');
  }

  return (
    <div>
      <h1>Adding event listeners in React</h1>
      <button onClick={someText}>Click me</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
