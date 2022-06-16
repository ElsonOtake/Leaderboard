const loadList = (scores) => {
  const ul = document.querySelector('ul');
  while (document.querySelector('ul li')) {
    ul.removeChild(document.querySelector('ul li'));
  }
  const header = document.createElement('li');
  const rankHeader = document.createElement('span');
  rankHeader.innerText = 'Rank'
  header.appendChild(rankHeader);
  const userHeader = document.createElement('span');
  userHeader.innerText = 'User'
  header.appendChild(userHeader);
  const scoreHeader = document.createElement('span');
  scoreHeader.innerText = 'Score';
  header.appendChild(scoreHeader);
  ul.appendChild(header);
  const sorted = scores.result.sort(({score:a}, {score:b}) => b - a);
  sorted.forEach((scr, idx) => {
    const li = document.createElement('li');
    const rank = document.createElement('span');
    rank.innerText = `${idx + 1}`;
    li.appendChild(rank);
    const user = document.createElement('span');
    user.innerText = `${scr.user}`;
    li.appendChild(user);
    const score = document.createElement('span');
    score.innerText = `${scr.score}`;
    li.appendChild(score);
    ul.appendChild(li);
  });
};

export default loadList;