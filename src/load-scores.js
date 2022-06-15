import gameId from "./game-id";

const loadScores = () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId() + '/scores/';
  const request = new Request(requestURL);
  fetch(request)
  .then(response => response.json())
  .then(data => console.log(data));
}

export default loadScores;
