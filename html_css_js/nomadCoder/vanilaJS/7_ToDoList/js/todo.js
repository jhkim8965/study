const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const $li = event.target.parentElement;
    $li.remove();

    // my idea
    // toDos.forEach((todo) => {
    //     if(todo.id == $li.id) {
    //         toDos.pop(todo);
    //     }
    // });
    // nico idea
    toDos = toDos.filter(todo => todo.id !== parseInt($li.id));
    saveToDos();

    console.log($li);
}

function paintToDo(newTodo) {
    const $li = document.createElement('li');
    $li.id = newTodo.id;

    const $span = document.createElement('span');
    $span.innerText = newTodo.text;
    $li.appendChild($span);

    const $button = document.createElement('button');
    $button.innerText = '❌';
    $button.addEventListener('click', deleteToDo);
    $li.appendChild($button);
    
    $toDoList.appendChild($li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = $toDoInput.value;
    $toDoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newToDo,
    };

    toDos.push(newTodoObj);
    
    paintToDo(newTodoObj);
    saveToDos();
}

$toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach((todo) => paintToDo(todo));
    parsedToDos.forEach(paintToDo);
}