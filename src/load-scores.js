import gameId from "./game-id";
import loadList from "./load-list";

const loadScores = () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId() + '/scores/';
  const request = new Request(requestURL);
  console.log("loadScores");
  fetch(request)
  .then(response => response.json())
  .then(data => loadList(data));
}

export default loadScores;
