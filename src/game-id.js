const gameId = () => {
  const game = JSON.parse(localStorage.getItem('gameId'));
  return game.id;
}

export default gameId;
