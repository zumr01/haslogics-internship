'use strict';

/**
 * Challenge: Move the star image into its own component
 * - It should receive a prop called `isFilled` that it
 *   uses to determine which icon it will display
 * - Import and render that component, passing the value of
 *   `isFavorite` to the new `isFilled` prop.
 * - Don't worry about the abiliity to flip this value quite yet.
 *   Instead, you can test if it's working by manually changing
 *   `isFavorite` in state above.
 */

const Star = ({ isFilled, handleClick }) => {
  const starIcon = isFilled ? 'star-filled.png' : 'star-empty.png';
  return (
    <div>
      <img
        src={`../images/${starIcon}`}
        className='card--favorite'
        onClick={handleClick}
      />
    </div>
  );
};

function App() {
  const [contact, setContact] = React.useState({
    firstName: 'Zain',
    lastName: 'Umer',
    phone: '+1 (719) 555-1212',
    email: 'zainumer147@gmail.com',
    isFavorite: false,
  });

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
          <Star
            isFilled={contact.isFavorite}
            handleClick={toggleFavorite}
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
