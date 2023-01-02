'use strict';

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isFriendly: true,
  });

  console.log(formData);

  function handleClick(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
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
      <input
        type='checkbox'
        name='isFriendly'
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={handleClick}
      />
      <label htmlFor='isFriendly'>Are you friendly?</label>
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
