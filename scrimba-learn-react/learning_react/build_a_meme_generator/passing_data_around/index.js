'use strict';

function App() {
  const [user, setUser] = React.useState('Zain');
  return (
    <main>
      <Header name={user} />
      <Body name={user} />
    </main>
  );
}

function Body({ name }) {
  return (
    <section>
      <h1>Welcome back, {name}!</h1>
    </section>
  );
}

function Header({ name }) {
  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */

  return (
    <header>
      <p>Current user: {name}</p>
    </header>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
