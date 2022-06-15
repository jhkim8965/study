const $jsClock = document.querySelector('.js-clock');

function timeHandler() {
    const presentDate = new Date();
    const christmasDate = new Date(presentDate.getFullYear(), 11, 24);
    const timeGap = (christmasDate.getTime() - presentDate.getTime()) / 1000;
    const days = Math.floor(timeGap / (24 * 60 * 60));
    const hours = Math.floor(timeGap / (60 * 60) % 24);
    const minutes = Math.floor(timeGap / (60) % 60);
    const seconds = Math.floor(timeGap % 60);

    $jsClock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

timeHandler();
setInterval(timeHandler, 1000);