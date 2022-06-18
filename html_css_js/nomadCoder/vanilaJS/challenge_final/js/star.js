const $img = document.querySelector('.night-city .img');
const $stars = document.querySelector('.night-city .stars');
const toMakeStarCnt = 100;
const maxStarSize = 0.5;
const maxStarAnimateDelay = 10;
const starAnimateDuration = 10;

let createdStarCount = 0;
while(createdStarCount < toMakeStarCnt) {
    const $star = document.createElement('i');
    const x = Math.floor(Math.random() * $img.offsetWidth) + $img.offsetLeft;
    const y = Math.floor(Math.random() * $img.offsetHeight) - 10;
    const size = Math.random() * maxStarSize;

    $star.style.left = x + 'px';
    $star.style.top = y + 'px';;
    $star.style.width = size + 'vh';
    $star.style.height = size + 'vh';

    $star.style.animationDelay = Math.random() * maxStarAnimateDelay + 's';
    $star.style.animationDuration = starAnimateDuration + 's';

    $stars.appendChild($star);

    createdStarCount++;
}