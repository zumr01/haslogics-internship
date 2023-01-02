'use strict';

function App() {
  const [messages, setMessages] = React.useState(['a', 'b']);
  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there are > 0 unread messages, display "You have <n> unread
   *   message(s)"
   *      - If there's exactly 1 unread message, it should read "message"
   *        (singular)
   */
  const msgsArr = messages.length;
  return (
    <div>
      {msgsArr === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {msgsArr} unread {msgsArr > 1 ? 'messages' : 'message'}
        </h1>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
