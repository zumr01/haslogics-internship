'use strict';

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
  });

  /**
   * Challenge: Add a textarea for "comments" to the form
   * Make sure to update state when it changes.
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
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleClick}
        name='lastName'
        value={formData.lastName}
      />
      <input
        type='email'
        placeholder='Email'
        onChange={handleClick}
        name='email'
        value={formData.email}
      />
      <textarea
        onChange={handleClick}
        name='comment'
        value={formData.comments}
        placeholder='Comments'
      />
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
