import { setShip } from './ship-module';
import { fleet } from './helpers';

function initHTML() {
    const gameboard = document.createElement('section');
    gameboard.classList.add('c-gameboard');
    gameboard.innerHTML = `<div class="c-gameboard__item c-gameboard__item--user"></div>
    <div class="c-gameboard__item c-gameboard__item--computer"></div>`;

    const action = document.createElement('section');
    action.classList.add('c-action');
    action.innerHTML = `<button type="button" class="c-action__start c-btn">Start Game</button>
    <button type="button" class="c-action__rotate c-btn">Rotate Your Ship</button>
    <h3 class="c-action__turn">Your Turn</h3>
    <h3 class="c-action__info"></h3>`;

    const display = document.createElement('section');
    display.classList.add('c-display');
    display.innerHTML = `<div class="c-display__ship c-display__ship--destroyer" draggable="true"><div data-id="destroyer-0"></div><div data-id="destroyer-1"></div></div>
<div class="c-display__ship c-display__ship--submarine" draggable="true"><div data-id="submarine-0"></div><div data-id="submarine-1"></div><div data-id="submarine-2"></div></div>
<div class="c-display__ship c-display__ship--cruiser" draggable="true"><div data-id="cruiser-0"></div><div data-id="cruiser-1"></div><div data-id="cruiser-2"></div></div>
<div class="c-display__ship c-display__ship--battleship" draggable="true"><div data-id="battleship-0"></div><div data-id="battleship-1"></div><div data-id="battleship-2"></div><div data-id="battleship-3"></div></div>
<div class="c-display__ship c-display__ship--carrier" draggable="true"><div data-id="carrier-0"></div><div data-id="carrier-1"></div><div data-id="carrier-2"></div><div data-id="carrier-3"></div><div data-id="carrier-4"></div></div>`;

    document.body.appendChild(gameboard);
    document.body.appendChild(action);
    document.body.appendChild(display);

    _addEvents();
}

function _addEvents() {
    const userGrid = document.querySelector('.c-gameboard__item--user');
    const computerGrid = document.querySelector('.c-gameboard__item--computer');
    const ships = document.querySelectorAll('.c-display__ship');
    const startBtn = document.querySelector('.c-action__start');
    const rotateBtn = document.querySelector('.c-action__rotate');
    const turnDisplay = document.querySelector('.c-action__turn');
    const infoDisplay = document.querySelector('.c-action__info');
    
    _createBoard([userGrid, computerGrid]);

    const userBoxes = document.querySelectorAll('.c-gameboard__item--user div');
    const computerBoxes = document.querySelectorAll('.c-gameboard__item--computer div');

    // TODO: use loop or helper function
    setShip(fleet[0], computerBoxes);
    setShip(fleet[1], computerBoxes);
    setShip(fleet[2], computerBoxes);
    setShip(fleet[3], computerBoxes);
    setShip(fleet[4], computerBoxes);

    rotateBtn.addEventListener('click', _rotateShip);

    // drag ship
    ships.forEach( (ship) => ship.addEventListener('drag', _dragStart));

    userBoxes.forEach( (box) => box.addEventListener('drag', _dragStart));
    userBoxes.forEach( (box) => box.addEventListener('dragover', _dragOver));
    userBoxes.forEach( (box) => box.addEventListener('dragenter', _dragEnter));
    userBoxes.forEach( (box) => box.addEventListener('dragleave', _dragLeave));
    userBoxes.forEach( (box) => box.addEventListener('drop', _dragDrop));
    userBoxes.forEach( (box) => box.addEventListener('dragend', _dragEnd));

    ships.forEach( (ship) => ship.addEventListener('mousedown', (e) => {
        selectedShipNameWithIndex = e.target.dataset.id;
        console.log(selectedShipNameWithIndex);
    }));

}

function _createBoard([...args]) {
    [...args].forEach( (grid) => {
        for (let i = 0; i < 100; i++) {
            const box = document.createElement('div');
            box.dataset.id = i;
            grid.appendChild(box);
        }
    })
}

let isHorizontal = true;

function _rotateShip() {
    const battleship = document.querySelector('.c-display__ship--battleship');
    const carrier = document.querySelector('.c-display__ship--carrier');
    const submarine = document.querySelector('.c-display__ship--submarine');
    const cruiser = document.querySelector('.c-display__ship--cruiser');
    const destroyer = document.querySelector('.c-display__ship--destroyer');
    const displayGrid = document.querySelector('.c-display');

    // elements === null when removed from displayGrid
    if (destroyer !== null) {
        destroyer.classList.toggle('destroyer--vertical');
    }
    if (submarine !== null) {
        submarine.classList.toggle('submarine--vertical');
    }
    if (battleship !== null) {
        battleship.classList.toggle('battleship--vertical');
    }
    if (carrier !== null) {
        carrier.classList.toggle('carrier--vertical');
    }
    if (cruiser !== null) {
        cruiser.classList.toggle('cruiser--vertical');
    }

    displayGrid.classList.toggle('c-display--vertical');

    
    if (isHorizontal) {
        isHorizontal = false;
    } else {
        isHorizontal = true;
    }
}

let selectedShipNameWithIndex;
let _draggedShip;
let draggedShipLength;

function _dragStart(e) {
    _draggedShip = e.target;
    draggedShipLength = _draggedShip.childNodes.length;
    console.log(draggedShipLength);
}

function _dragOver(e) {
    e.preventDefault();
}

function _dragEnter(e) {
    e.preventDefault();
}

function _dragLeave() {
    console.log('drag leave');
}

function _dragDrop() {
    const userBoxes = document.querySelectorAll('.c-gameboard__item--user div');
    const displayGrid = document.querySelector('.c-display');

    let shipNameWithLastId = _draggedShip.lastChild.dataset.id;
    let shipClass = shipNameWithLastId.slice(0, -2);
    let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
    // "this" is the element that the dragged element is dropped on, which is the grid box
    let shipLastId = lastShipIndex + parseInt(this.dataset.id);
    console.log(shipLastId);

    let selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1));

    shipLastId = shipLastId - selectedShipIndex;

    if (isHorizontal) {
        for (let i = 0; i < draggedShipLength; i++) {
            userBoxes[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('isTaken', shipClass);
        }
    } else if (!isHorizontal) {
        for (let i = 0; i < draggedShipLength; i++) {
            userBoxes[parseInt(this.dataset.id) - selectedShipIndex + 10*i].classList.add('isTaken', shipClass);
        }
    } else {
        return;
    }

    displayGrid.removeChild(_draggedShip);
}

function _dragEnd() {

}


export { initHTML }
