const popupBtns = document.querySelectorAll('.popupBtn');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup-content');

popupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    displayPopup();
  });
});

overlay.addEventListener('click', () => {
  closePopup();
});

function displayPopup() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
}