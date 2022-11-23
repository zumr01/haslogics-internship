"use strict";

const text = document.getElementById("text");
const author = document.getElementById("author");
// const quoteMark = document.getElementById("quote-mark");

const btnNewQuote = document.getElementById("new-quote");

const quotesArr = [
  {
    q: "Be regular and orderly in your life, so that you may be violent and original in your work.",
    a: "Gustave Flaubert",
    c: "90",
    h: "<blockquote>&ldquo;Be regular and orderly in your life, so that you may be violent and original in your work.&rdquo; &mdash; <footer>Gustave Flaubert</footer></blockquote>",
  },

  {
    q: "Nothing has more strength than dire necessity.",
    a: "Euripides",
    c: "46",
    h: "<blockquote>&ldquo;Nothing has more strength than dire necessity.&rdquo; &mdash; <footer>Euripides</footer></blockquote>",
  },

  {
    q: "If you do not conquer self, you will be conquered by self.",
    a: "Napoleon Hill",
    c: "58",
    h: "<blockquote>&ldquo;If you do not conquer self, you will be conquered by self.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>",
  },

  {
    q: "Live and act within the limit of your knowledge and keep expanding it to the limit of your life.",
    a: "Ayn Rand",
    c: "96",
    h: "<blockquote>&ldquo;Live and act within the limit of your knowledge and keep expanding it to the limit of your life.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
  },

  {
    q: "Patience expands your options. If you insist on immediate gratification, your choices are severely limited.",
    a: "Ralph Marston",
    c: "107",
    h: "<blockquote>&ldquo;Patience expands your options. If you insist on immediate gratification, your choices are severely limited.&rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>",
  },

  {
    q: "If you think you can do a thing or think you can't do a thing, you're right.",
    a: "Henry Ford",
    c: "76",
    h: "<blockquote>&ldquo;If you think you can do a thing or think you can't do a thing, you're right.&rdquo; &mdash; <footer>Henry Ford</footer></blockquote>",
  },

  {
    q: "Friendship takes time and energy if it's going to work.",
    a: "Betty White",
    c: "55",
    h: "<blockquote>&ldquo;Friendship takes time and energy if it's going to work.&rdquo; &mdash; <footer>Betty White</footer></blockquote>",
  },

  {
    q: "We have a choice everyday regarding the attitude we will embrace for that day.",
    a: "Charles Swindoll",
    c: "78",
    h: "<blockquote>&ldquo;We have a choice everyday regarding the attitude we will embrace for that day.&rdquo; &mdash; <footer>Charles Swindoll</footer></blockquote>",
  },

  {
    q: "If you build the guts to do something, anything, then you better save enough to face the consequences.",
    a: "Criss Jami",
    c: "102",
    h: "<blockquote>&ldquo;If you build the guts to do something, anything, then you better save enough to face the consequences.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>",
  },

  {
    q: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    a: "Bhagavad Gita",
    c: "97",
    h: "<blockquote>&ldquo;When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>",
  },

  {
    q: "You must either modify your dreams or magnify your skills.",
    a: "Jim Rohn",
    c: "58",
    h: "<blockquote>&ldquo;You must either modify your dreams or magnify your skills.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },

  {
    q: "Remember the entrance to the sanctuary is inside you.",
    a: "Rumi",
    c: "53",
    h: "<blockquote>&ldquo;Remember the entrance to the sanctuary is inside you.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
  },

  {
    q: "Public opinion is the worst of all opinions.",
    a: "Nicolas Chamfort",
    c: "44",
    h: "<blockquote>&ldquo;Public opinion is the worst of all opinions.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>",
  },

  {
    q: "When you make a choice, you change the future.",
    a: "Deepak Chopra",
    c: "46",
    h: "<blockquote>&ldquo;When you make a choice, you change the future.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
  },

  {
    q: "Take care of your body. It's the only place you have to live.",
    a: "Jim Rohn",
    c: "61",
    h: "<blockquote>&ldquo;Take care of your body. It's the only place you have to live.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
];

const randomQuoteMachine = function () {
  const randomQuote = Math.trunc(Math.random() * quotesArr.length);
  const quoteText = quotesArr[randomQuote].q;
  const authorName = quotesArr[randomQuote].a;

  if (!authorName) {
    author = "Anonymous";
    text = "Anonymous";
  } else {
    text.innerHTML = quoteText;
    author.innerHTML = authorName;
  }
};

randomQuoteMachine();

btnNewQuote.addEventListener("click", function () {
  for (let i = 0; i < quotesArr.length; i++) {
    // 1. Generate a random number
    randomQuoteMachine();
  }
});
