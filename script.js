
document.querySelector('.btn-book').addEventListener('click', () => {
  alert('Booking table');
});

document.querySelector('.btn-explore').addEventListener('click', () => {
  alert('Exloring Wilderness');
});



const loginButton = document.querySelector('.login-button');
const modal = document.getElementById('loginModal');
const closeButton = modal.querySelector('.close-button');

loginButton.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('успех ' + loginForm.username.value);
  modal.style.display = 'none';
  loginForm.reset();
});

