const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
    ];

const $body = document.querySelector('body');
const $button = document.querySelector('button');

function handleClickEvent(event) {

    const fromBgColor = colors[Math.floor(Math.random() * colors.length)];
    const toBgColor = colors[Math.floor(Math.random() * colors.length)];
    const middleColor = getColorInMiddleOfGradient(fromBgColor, toBgColor);
    
    $body.style.background = `linear-gradient(${Math.random()}turn, ${fromBgColor}, ${toBgColor})`;
    $button.style.background = middleColor;
    $button.style.color = middleColor;

    // when user clicked the button.
    if(event) {
        
        const $span = document.createElement('span');
        $span.className = 'userClick';
        $span.innerText = 'User Click!!';
        $body.appendChild($span);

        onMessageEffect($span);
    }
}

$button.addEventListener('click', handleClickEvent);

// execute once when this page has loaded.
// $button.dispatchEvent(new Event('click'));  // fire a click event
handleClickEvent();

function getColorInMiddleOfGradient(fromBgColor, toBgColor) {

    fromBgColor = fromBgColor.replace('#', '');
    toBgColor = toBgColor.replace('#', '');

    const ratio = 0.5;
    const r = Math.ceil(parseInt(fromBgColor.substring(0, 2), 16) * ratio + parseInt(toBgColor.substring(0, 2), 16) * (1 - ratio));
    const g = Math.ceil(parseInt(fromBgColor.substring(2, 4), 16) * ratio + parseInt(toBgColor.substring(2, 4), 16) * (1 - ratio));
    const b = Math.ceil(parseInt(fromBgColor.substring(4, 6), 16) * ratio + parseInt(toBgColor.substring(4, 6), 16) * (1 - ratio));

    return '#' + getHex(r) + getHex(g) + getHex(b);
}

function getHex(decimal) {
    return decimal.toString(16).padStart(2, '0');
}

function onMessageEffect($tag) {

    setTimeout(() => {
        $tag.classList.add('active');
    }, 300);
    setTimeout(() => {
        $tag.remove();
    }, 800);
}

function handleIntervalEvent() {
    // fire a click event
    // $button.dispatchEvent(new Event('click'))
    handleClickEvent();

    const $span = document.createElement('span');
    $span.className = 'autoClick';
    $span.innerText = 'Auto Click!!';
    $body.appendChild($span);

    onMessageEffect($span);
}

setInterval(handleIntervalEvent, 300);