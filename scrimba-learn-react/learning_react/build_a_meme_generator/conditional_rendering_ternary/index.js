'use strict';
const jokeData = [
  {
    id: 1,
    setup: 'I got my daughter a fridge for her birthday.',
    punchline: "I can't wait to see her face light up when she opens it.",
  },
  {
    id: 2,
    setup: 'How did the hacker escape the police?',
    punchline: 'He just ransomware!',
  },
  {
    id: 3,
    setup: "Why don't pirates travel on mountain roads?",
    punchline: 'Scurvy.',
  },
  {
    id: 4,
    setup: 'Why do bees stay in the hive in the winter?',
    punchline: 'Swarm.',
  },
  {
    id: 5,
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
  },
];

function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>
      <hr />
    </div>
  );
}

function App() {
  const jokeElements = jokeData.map((joke) => {
    return (
      <Joke
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    );
  });
  return <div>{jokeElements}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
