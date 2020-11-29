const $reset = document.querySelector('.reset');

function reset() {
  const $btnReset = document.createElement('button');
  $btnReset.classList.add('button');
  $btnReset.innerText = 'Reset';
  $btnReset.style.margin = '0 auto';
  $reset.appendChild($btnReset);
  $btnReset.addEventListener('click', () => {
    window.location.reload();
  });
}

export default reset;
