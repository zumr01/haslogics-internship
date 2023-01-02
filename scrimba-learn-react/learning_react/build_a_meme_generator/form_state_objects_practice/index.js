'use strict';

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  /**
   * Challenge: add an email field/state to the form
   */

  console.log(formData);

  function handleClick(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleClick}
        name='firstName'
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleClick}
        name='lastName'
      />
      <br />
      <input
        type='email'
        placeholder='Email'
        onChange={handleClick}
        name='email'
      />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
