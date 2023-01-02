'use strict';

function Form() {
  /**
   * Challenge: Track the applicant's last name as well
   */
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  function handleClick(event) {
    setFirstName(event.target.value);
  }

  function handleClick(event) {
    setlastName(event.target.value);
  }
  return (
    <form>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleClick}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleClick}
      />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
