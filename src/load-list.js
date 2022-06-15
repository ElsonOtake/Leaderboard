const loadList = (scores) => {
  const ul = document.querySelector('ul');
  const lists = document.querySelectorAll('ul li');
  const scoreSize = scores.result.length;
  let listSize = lists.length;
  while (scoreSize > listSize) {
    const li = document.createElement('li');
    li.innerText = scores.result[listSize].user + ': ' + scores.result[listSize].score;
    ul.appendChild(li);
    listSize += 1;
  }
}

export default loadList;