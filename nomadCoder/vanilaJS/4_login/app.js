const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');

const CLASSNAME_HIDDEN = 'hidden';

function onLoginFormSubmit(info) {

  info.preventDefault();  // prevent browser default feature when the form submitted

  const userName = $loginInput.value;
  localStorage.setItem('username', userName);   // save username in localstorage

  $loginForm.classList.add(CLASSNAME_HIDDEN);
  $greeting.innerText = 'Hello ' + userName;
  $greeting.classList.remove(CLASSNAME_HIDDEN);
}

$loginForm.addEventListener('submit', onLoginFormSubmit);