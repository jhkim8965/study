const $todoForm = document.getElementById('todo-form');
const $todoInput = $todoForm.querySelector('#todo-input');
const $todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let todoList = [];

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    todoList = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

$todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTodo = $todoInput.value;
    $todoInput.value = '';

    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
        done: '',
    };
console.log(newTodoObj);
    todoList.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
});

function paintToDo(newTodo) {
    const $li = document.createElement('li');
    $li.id = newTodo.id;

    const doneYn = newTodo.done;
    const $span = document.createElement('span');
    $span.innerText = newTodo.text;
    if(doneYn === 'Y') {
        $span.classList.add('done');
    }
    $li.appendChild($span);

    const $div = document.createElement('div');
    const $doneIcon = document.createElement('ion-icon');
    $doneIcon.name = 'checkmark-outline';
    $doneIcon.classList.add('icon');
    $doneIcon.addEventListener('click', doneToDo);
    $div.appendChild($doneIcon);
    const $deleteIcon = document.createElement('ion-icon');
    $deleteIcon.name = 'trash-outline';
    $deleteIcon.classList.add('icon');
    $deleteIcon.addEventListener('click', deleteToDo);
    $div.appendChild($deleteIcon);
    $li.appendChild($div);
    
    $todoList.appendChild($li);
}

function doneToDo(event) {
    const $li = event.target.parentElement.parentElement;
    const $span = $li.querySelector('span');
    $span.classList.toggle('done');

    todoList.forEach(todo => {
        if(todo.id === parseInt($li.id)) {
            todo.done = todo.done === 'Y' ? 'N' : 'Y';
        }
    });;
    saveToDos();
}

function deleteToDo(event) {
    const $li = event.target.parentElement.parentElement;
    $li.remove();

    todoList = todoList.filter(todo => todo.id !== parseInt($li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
}