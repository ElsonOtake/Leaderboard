import postData from "./post-data";

const createGame = () => {
  postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: "Big bamboo game" })
  .then(data => {
    localStorage.setItem('gameId', JSON.stringify({
      id: data.result.substr(14, 20) 
    }));
  });
}

export default createGame;
