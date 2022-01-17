const container = document.querySelector('#container');
const size = 100;
const ship = {
    length: 5,
    direction: 'vertical'
}

createBoard(size);

const boxes = document.querySelectorAll('.c-box');
console.log(boxes[0]);

function createBoard(size) {
    for (let i = 0; i < size; i++) {
        const box = document.createElement('div');
        box.classList.add('c-box');
        container.appendChild(box);
    }
}

function placeShip(ship, startPos) {
    let length = ship.length;
    let rightBorder = Math.ceil((startPos + 0.01)/10) * 10 - 1;
    let bottomBorder = 100;

    if (ship.direction === 'horizontal') {
        if (startPos + (length - 1) <= rightBorder) {
            for (let i = 0; i < length; i++) {
                boxes[startPos + i ].textContent = 'X';
            }
        }
    } else {
        if (startPos + ((length - 1) * 10) < bottomBorder) {
            for (let i = 0; i < length; i++) {
                boxes[startPos + (i * 10) ].textContent = 'X';
            }
        }
    }

    
}

placeShip(ship, 9);