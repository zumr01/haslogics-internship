'use strict';

function Form() {
  /**
   * Challenge: Track the applicant's last name as well
   */

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
  });

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
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
