import card1 from './images/card-1.png';
import card2 from './images/card-2.png';

export default [
  {
    id: 1,
    title: 'Life Lessons with Katie Zaferes',
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg: card1,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: 'UK',
    openSpots: 0,
  },
  {
    id: 2,
    title: 'Learn Wedding Photography',
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: card2,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: 'USA',
    openSpots: 27,
  },
  {
    id: 3,
    title: 'Group Mountain Biking',
    description:
      'Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)',
    price: 50,
    coverImg: card1,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: 'Norway',
    openSpots: 3,
  },
];
