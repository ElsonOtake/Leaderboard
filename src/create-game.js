import postData from "./post-data";

const createGame = () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const request = new Request(requestURL);
  postData(request, { name: "Big bamboo game" })
  .then(data => {
    localStorage.setItem('gameId', JSON.stringify({
      id: data.result.substr(14, 20) 
    }));
  });
}

export default createGame;
