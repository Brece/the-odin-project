let isGameOver = false;
let currentPlayer = 'user';

let destroyerCount = 0;
let submarineCount = 0;
let cruiserCount = 0;
let battleshipCount = 0;
let carrierCount = 0;

let cpuDestroyerCount = 0;
let cpuSubmarineCount = 0;
let cpuCruiserCount = 0;
let cpuBattleshipCount = 0;
let cpuCarrierCount = 0;

function game() {
    const turnDisplay = document.querySelector('.c-action__turn');
    const computerBoxes = document.querySelectorAll('.c-gameboard__item--computer div');

    if (isGameOver) { return };
    if (currentPlayer === 'user') {
        turnDisplay.innerHTML = 'Your turn!';
        computerBoxes.forEach( (box) => box.addEventListener('click', (e) => {
            _revealBox(box);
        }))
    }

    if (currentPlayer === 'computer') {
        turnDisplay.innerHTML = `Computer's turn!`;
        setTimeout(_computerTurn, 1000);
    }
}

function _revealBox(box) {
    if (!box.classList.contains('isHit')) {
        if (box.classList.contains('destroyer')) { destroyerCount++ }
        if (box.classList.contains('submarine')) { submarineCount++ }
        if (box.classList.contains('cruiser')) { cruiserCount++ }
        if (box.classList.contains('battleship')) { battleshipCount++ }
        if (box.classList.contains('carrier')) { carrierCount++ }
    }

    if (box.classList.contains('isTaken')) {
        box.classList.add('isHit');
        box.textContent = 'X';
    } else {
        box.classList.add('isMissed');
        box.textContent = '--';
    }

    currentPlayer = 'computer';
    _checkWin();
    game();
}

function _computerTurn() {
    const userBoxes = document.querySelectorAll('.c-gameboard__item--user div');
    const turnDisplay = document.querySelector('.c-action__turn');

    let random = Math.floor(Math.random() * userBoxes.length);
    let attackedBox = userBoxes[random];

    if (!attackedBox.classList.contains('isHit') && !attackedBox.classList.contains('isMissed')) {
        if (attackedBox.classList.contains('destroyer')) { cpuDestroyerCount++ }
        if (attackedBox.classList.contains('submarine')) { cpuSubmarineCount++ }
        if (attackedBox.classList.contains('cruiser')) { cpuCruiserCount++ }
        if (attackedBox.classList.contains('battleship')) { cpuBattleshipCount++ }
        if (attackedBox.classList.contains('carrier')) { cpuCarrierCount++ }

        if (attackedBox.classList.contains('isTaken')) {
            attackedBox.classList.add('isHit');
            attackedBox.textContent = 'X';
        } else {
            attackedBox.classList.add('isMissed');
            attackedBox.textContent = '--';
        }
    } else {
        _computerTurn();
    }

    currentPlayer = 'user';
    turnDisplay.innerHTML = 'Your turn!';
    _checkWin();
}

function _checkWin() {
    const infoDisplay = document.querySelector('.c-action__info');

    if (destroyerCount === 2) {
        infoDisplay.textContent = `You sunk the computer's destroyer`;
        destroyerCount = 10;
    }
    if (submarineCount === 3) {
        infoDisplay.textContent = `You sunk the computer's submarine`;
        submarineCount = 10;
    }
    if (cruiserCount === 3) {
        infoDisplay.textContent = `You sunk the computer's cruiser`;
        cruiserCount = 10;
    }
    if (battleshipCount === 4) {
        infoDisplay.textContent = `You sunk the computer's battleship`;
        battleshipCount = 10;
    }
    if (carrierCount === 5) {
        infoDisplay.textContent = `You sunk the computer's carrier`;
        carrierCount = 10;
    }

    if (cpuDestroyerCount === 2) {
        infoDisplay.textContent = `You sunk the player's destroyer`;
        cpuDestroyerCount = 10;
    }
    if (cpuSubmarineCount === 3) {
        infoDisplay.textContent = `You sunk the player's submarine`;
        cpuSubmarineCount = 10;
    }
    if (cpuCruiserCount === 3) {
        infoDisplay.textContent = `You sunk the player's cruiser`;
        cpuCruiserCount = 10;
    }
    if (cpuBattleshipCount === 4) {
        infoDisplay.textContent = `You sunk the player's battleship`;
        cpuBattleshipCount = 10;
    }
    if (cpuCarrierCount === 5) {
        infoDisplay.textContent = `You sunk the player's carrier`;
        cpuCarrierCount = 10;
    }

    if (destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount === 50) {
        infoDisplay.textContent = 'YOU WIN!';
        gameOver();
    }
    if (cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount === 50) {
        infoDisplay.textContent = 'YOU WIN!';
        gameOver();
    }
}

function gameOver() {
    const startBtn = document.querySelector('.c-action__start');

    isGameOver = true;
    startBtn.removeEventListener('click', game);
}

export { game }
