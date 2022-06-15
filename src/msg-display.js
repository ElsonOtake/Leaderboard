const msgDisplay = (msg) => {
  const message = document.querySelector('body>p');
  message.innerText = msg;
  message.classList.add('active');
  setTimeout(() => {
    message.classList.remove('active');
  }, 3000);
}

export default msgDisplay;
