'use strict';

function App() {
  const [contact, setContact] = React.useState({
    firstName: 'Zain',
    lastName: 'Umer',
    phone: '+1 (719) 555-1212',
    email: 'zainumer147@gmail.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className='card'>
        <img
          src='./images/user.png'
          className='card--image'
        />
        <div className='card--info'>
          <img
            src={`../images/${starIcon}`}
            className='card--favorite'
            onClick={toggleFavorite}
          />
          <h2 className='card--name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='card--contact'>{contact.phone}</p>
          <p className='card--contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
