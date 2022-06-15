import gameId from './game-id.js';
import msgDisplay from './msg-display.js';
import postData from './post-data.js';

const addScore = (name, points) => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId()}/scores/`;
  const request = new Request(requestURL);
  postData(request, {
    user: name,
    score: points,
  })
    .then((data) => {
      msgDisplay(data.result);
    });
};

export default addScore;
