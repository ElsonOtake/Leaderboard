import createGame from './create-game.js';
import loadScores from './load-scores.js';
import './style.css';

if (!localStorage.getItem('gameId')) {
  createGame();
} else {
  loadScores();
}