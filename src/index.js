import './style.css';
import sendScores from './modules/score.js';
import asyncScores from './modules/async_score.js';

const scoreList = document.querySelector('#scores');
const refresh = document.querySelector('.recent-scores-refresh-btn');
const addScore = document.querySelector('#add-scores-form');

const addGame = async (url = '', data = {}) => {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const response = request.json();
  return response;
};

addGame(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  { name: 'newGame' },
).then((data) => {
  console.log(data);
});

addScore.addEventListener('submit', (event) => {
  event.preventDefault();
  sendScores(addScore);
  addScore.reset();
});

refresh.addEventListener('click', () => {
  asyncScores(scoreList);
});