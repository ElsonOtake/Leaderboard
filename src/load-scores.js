const loadScores = (id) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + id + '/scores/';
  const request = new Request(requestURL);
  fetch(request)
  .then(response => response.json())
  .then(data => console.log(data));
}

export default loadScores;
