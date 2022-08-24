const progressCircular = document.querySelector('.progress-circular');
const button = document.querySelector('button');
const input = document.querySelector('input');
const value = document.querySelector('.value');

let start = 0;

button.addEventListener('click', bar);

function bar() {
    let progess = setInterval(() => {
        if(start < input.value) {
            start++;
        } else {
            start--;
        }

        value.textContent = start + '%';
        progressCircular.style.background = `conic-gradient(#880bea ${start * 3.6}deg, #ededed 0deg)`;

        if(start == input.value) {
            clearInterval(progess);
            input.value = "";
        }
    }, 30);
}