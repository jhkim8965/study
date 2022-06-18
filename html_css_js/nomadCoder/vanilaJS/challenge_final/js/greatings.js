const $login = document.querySelector('.login');
const $loginForm = $login.querySelector('#login-form');
const $username = $loginForm.querySelector('#username');
const $greeting = document.getElementById('greeting');
const $todoList = document.getElementById('todo-list');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const PAINT_TEXT_TIME = 2500;

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    $loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const userName = $username.value;
        localStorage.setItem(USERNAME_KEY, userName);
        printGreetings(userName);
    });
} else {
    printGreetings(savedUserName);
}

function toggleGreetings() {
    $loginForm.classList.toggle(HIDDEN_CLASSNAME);
    $greeting.classList.toggle(HIDDEN_CLASSNAME);
}

function printGreetings(userName) {
    $greeting.innerText = `Hello! ${userName}!`;
    toggleGreetings();
    
    setTimeout(() => {
        $login.classList.add('showToDoList');
        $todoList.classList.add('showToDoList');
    }, PAINT_TEXT_TIME);
}