import loadScores from './load-scores.js';

const refreshScore = () => {
  const refreshBtn = document.querySelector('.list-score button');
  refreshBtn.addEventListener('click', () => {
    loadScores();
  });
};

export default refreshScore;
