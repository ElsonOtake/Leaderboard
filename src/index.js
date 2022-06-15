import addNewScore from './add-new-score.js';
import createGame from './create-game.js';
import loadScores from './load-scores.js';
import refreshScore from './refresh-score.js';
import './style.css';

if (!localStorage.getItem('gameId')) {
  createGame();
} else {
  loadScores();
}

addNewScore();
refreshScore();
