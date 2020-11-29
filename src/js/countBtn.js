const countBtn = (count = 6, el) => {
  const defaultInnerText = el.innerText;
  el.innerText = `${defaultInnerText} (${count})`;

  return function () {
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${defaultInnerText} (${count})`;
    return count;
  }
}

export default countBtn;
