'use strict';

function App() {
  const [messages, setMessages] = React.useState([]);
  // console.log(messages);
  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */

  return (
    <div>
      {messages.length > 0 && (
        <h1>You have {messages.length} unread messages!</h1>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
