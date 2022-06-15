const loadList = (scores) => {
  const ul = document.querySelector('ul');
  if (document.querySelector('ul li')) {
    ul.removeChild(document.querySelectorAll('ul li'));
  }
  scores.result.forEach(score => {
    const li = document.createElement('li');
    li.innerText = score.user + ': ' + scores.score;
    ul.appendChild(li);
  });
}

export default loadList;