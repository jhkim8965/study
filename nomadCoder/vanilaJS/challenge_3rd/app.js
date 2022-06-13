const $gameForm = document.getElementById('game-form');
const $gameInfo = document.getElementById('game-info');


function onSubmit(info) {
    info.preventDefault();

    const $chose = document.getElementById('chose');
    const $result = document.getElementById('result');

    const range = parseInt(document.getElementById('range').value);
    const guessNumber = parseInt(document.getElementById('guess-number').value);

    if( isNaN(guessNumber) ) {
        alert('숫자를 선택한 후에 게임을 플레이할 수 있습니다.');
    } else {
        const machineNumber = Math.ceil(Math.random() * range);
    
        $chose.innerText = `You chose: ${guessNumber}, the machine chose: ${machineNumber}`;
    
        if (machineNumber === guessNumber) {
            $result.innerText = 'You Win!';
        } else {
            $result.innerText = 'You Lost!';
        }
    
        $gameInfo.classList.remove('hidden');
    }
}

$gameForm.addEventListener('submit', onSubmit);