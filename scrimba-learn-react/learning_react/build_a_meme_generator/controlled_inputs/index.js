'use strict';

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  /**
   * better approach is state control the inputs insted of inputs controls the state means inputs tell state what to be is not a better approach
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
        value={formData.firstName}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleClick}
        name='lastName'
        value={formData.lastName}
      />
      <br />
      <input
        type='email'
        placeholder='Email'
        onChange={handleClick}
        name='email'
        value={formData.email}
      />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
