'use strict';

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isFriendly: true,
    employment: '',
    favorColor: '',
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type='radio'
          id='unemployed'
          name='employment'
          onChange={handleClick}
          value='employment'
          checked={formData.employment === 'employment'}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />

        <input
          type='radio'
          id='part-time'
          name='employment'
          onChange={handleClick}
          value='part-time'
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor='part-time'>Part-time</label>
        <br />

        <input
          type='radio'
          id='full-time'
          name='employment'
          onChange={handleClick}
          value='full-time'
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
      <br />
      <br />

      <label
        style={{ fontWeight: 'bold' }}
        htmlFor='favColor'
      >
        What is your favorite color?
      </label>
      <br />
      <br />
      <select
        id='favColor'
        name='favorColor'
        value={formData.favorColor}
        onChange={handleClick}
      >
        <option value=''> -- Choose -- </option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
