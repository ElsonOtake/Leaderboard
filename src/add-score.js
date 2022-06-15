import gameId from "./game-id";
import postData from "./post-data";

const addScore = (name, points) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId() + '/scores/';
  const request = new Request(requestURL);
  postData(request, { 
    user: name,
    score: points })
  .then(data => {
    console.log(data);
  });
}

export default addScore;
