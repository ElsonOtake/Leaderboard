import postData from "./post-data";

const bigBamboo = {
  id: ''
};

const createGame = () => {
  postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: "Big bamboo game" })
  .then(data => {
    bigBamboo.id = data.result.substr(14, 20);
    const gameData = JSON.stringify(bigBamboo);
    localStorage.setItem('gameId', JSON.stringify(gameData));
  });
}

export default createGame;
