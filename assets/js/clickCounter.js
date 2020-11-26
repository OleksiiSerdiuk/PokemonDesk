function clickCounter(button) {
  ++button.countClick;

  if (button.countClick >= button.maxClickBtn) {
    button.btn.disabled = true;
  }
  addCount(button);
}

function addCount(button) {
  button.returnCount.innerText = `${button.maxClickBtn - button.countClick}`;
}

export default clickCounter;
