const loadList = (scores) => {
  const ul = document.querySelector('ul');
  while (document.querySelector('ul li')) {
    ul.removeChild(document.querySelector('ul li'));
  }
  scores.result.forEach(scr => {
    const li = document.createElement('li');
    li.innerText = scr.user + ': ' + scr.score;
    ul.appendChild(li);
  });
}

export default loadList;