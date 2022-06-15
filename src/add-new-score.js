import addScore from "./add-score";

const addNewScore = () => {
  const submitBtn = document.querySelector('.add-score button');
  const inputTxt = document.querySelector('.add-score input[type=text]');
  const inputNum = document.querySelector('.add-score input[type=number]');

  const enableButton = () => {
    if (inputTxt.value !== '' && inputNum.value !== '') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  submitBtn.addEventListener('click', () => {
    addScore(inputTxt.value, parseInt(inputNum.value, 10));
    inputTxt.value = '';
    inputNum.value = '';
  })

  inputTxt.addEventListener('input', () => {
    enableButton();
  })

  inputNum.addEventListener('input', () => {
    enableButton();
  })
}

export default addNewScore;