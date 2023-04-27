const submitBtn = document.querySelector('.submit');
const buttons = document.querySelectorAll('.buttons .btn');
const output = document.querySelector('#result');
const resetBtn = document.querySelector('.reset');

buttons.forEach((button, clickedIndex) => {
  button.addEventListener('click', (e) => {
    buttons.forEach((otherBtns, otherIndex) => {
      if (otherIndex <= clickedIndex) {
        otherBtns.classList.add('active');
      } else {
        otherBtns.classList.remove('active');
      }
      output.innerHTML = `<p>You selected ${e.target.innerText} out of 5</p>`;
    });
  });
});
