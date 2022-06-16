const $clock = document.getElementById('clock');

function paintClock() {
    const date = new Date();
    $clock.innerText = `${String(date.getHours()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

paintClock();
setInterval(paintClock, 1000);