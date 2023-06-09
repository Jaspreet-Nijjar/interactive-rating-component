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

submitBtn.addEventListener('click', () => {
  buttons.forEach((button) => {
    if (button.classList.contains('active')) {
      output.innerHTML = `<p>Thank you for submitting your rating</p>`;
      submitBtn.style.display = 'none';
      resetBtn.style.display = 'block';

      buttons.forEach((button) => {
        button.classList.remove('active');
        button.disabled = true;
      });
    }
  });
});

resetBtn.addEventListener('click', () => {
  output.innerHTML = '';
  buttons.forEach((button) => {
    button.disabled = false;
  });
  submitBtn.style.display = 'block';
  resetBtn.style.display = 'none';
});
