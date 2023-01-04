import React from 'react';

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleClick(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  return (
    <section className='meme'>
      <div className='form'>
        <input
          className='form--input'
          type='text'
          placeholder='Top Text'
          name='topText'
          value={meme.topText}
          onChange={handleClick}
        />
        <input
          className='form--input'
          type='text'
          placeholder='Bottom Text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleClick}
        />

        <button
          onClick={getMemeImg}
          className='form--btn'
        >
          Get a new meme image
        </button>
      </div>
      <div className='meme--area'>
        <img
          src={meme.randomImage}
          className='meme--image'
        />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </section>
  );
};

export default Meme;
