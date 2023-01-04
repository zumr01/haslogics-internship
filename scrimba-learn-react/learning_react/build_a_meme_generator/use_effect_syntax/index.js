'use strict';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});

  // console.log("Component rendered")

  fetch('https://swapi.dev/api/people/1')
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  // side effects takes 2 parameters 1 is required and 2nd is optional
  React.useEffect(function () {
    fetch('https://swapi.dev/api/people/1').then((res) => res.json());
    // .then(data => setStarWarsData(data))
  });

  // anything put inside the callback function of useEffect() is guarantee to run only after the user interface has been painted or renders in the screen

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
