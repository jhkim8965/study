const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onLoginFormSubmit);
} else {
  printGreetings(savedUserName);
}

function onLoginFormSubmit(info) {
  info.preventDefault();  // prevent browser default feature when the form submitted

  const userName = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);   // save username in localstorage

  $loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreetings(userName);
}

function printGreetings(userName) {
  $greeting.innerText = `Hello ${userName}`;
  $greeting.classList.remove(HIDDEN_CLASSNAME);
}