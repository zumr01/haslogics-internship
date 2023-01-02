'use strict';

function Form() {
  const [firstName, setFirstName] = React.useState('');
  function handleChange(event) {
    setFirstName(event.target.value);
  }

  return (
    <form>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleChange}
      />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
