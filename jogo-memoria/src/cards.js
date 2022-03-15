import Heroku from './assets/heroku.png';
import HtmlCss from './assets/htmlcss.png';
import Javascript from './assets/javascript.png';
import Netlify from './assets/netlify.png';
import Nodejs from './assets/nodejs.png';
import React from './assets/react.png';

const cardsOriginal = [
  {
    id: 1,
    slug: 'heroku',
    image: Heroku,
    turned: false
  },
  {
    id: 2,
    slug: 'htmlcss',
    image: HtmlCss,
    turned: false
  },
  {
    id: 3,
    slug: 'htmlcss',
    image: HtmlCss,
    turned: false
  },
  {
    id: 4,
    slug: 'javascript',
    image: Javascript,
    turned: false
  },
  {
    id: 5,
    slug: 'netlify',
    image: Netlify,
    turned: false
  },
  {
    id: 6,
    slug: 'nodejs',
    image: Nodejs,
    turned: false
  },
  {
    id: 7,
    slug: 'javascript',
    image: Javascript,
    turned: false
  },
  {
    id: 8,
    slug: 'netlify',
    image: Netlify,
    turned: false
  },
  {
    id: 9,
    slug: 'react',
    image: React,
    turned: false
  },
  {
    id: 10,
    slug: 'nodejs',
    image: Nodejs,
    turned: false
  },
  {
    id: 11,
    slug: 'react',
    image: React,
    turned: false
  },
  {
    id: 12,
    slug: 'heroku',
    image: Heroku,
    turned: false
  },
];

function shuffleArray(item) {

  for (let i = item.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [item[i], item[j]] = [item[j], item[i]];
  };

  return item;
};

const cards = shuffleArray(cardsOriginal);

export default cards;