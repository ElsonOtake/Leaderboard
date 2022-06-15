import gameId from './game-id.js';
import loadList from './load-list.js';

const loadScores = () => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId()}/scores/`;
  const request = new Request(requestURL);
  fetch(request)
    .then((response) => response.json())
    .then((data) => loadList(data));
};

export default loadScores;
