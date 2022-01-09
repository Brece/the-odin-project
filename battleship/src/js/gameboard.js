import { createShip } from './ship.module';
import { SHIP_TYPES, SHIP_LENGTH } from './helpers';

// gameboard 10 x 10 grid

// ship horizontal: start = grid[x], end = grid[x + ship.length]
// ship vertical: start = grid[x], end = grid[x + (ship.length * 10)]
// check for valid cells (indexes):
//      horizontalRightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99] 
//      horizontalLeftBorder = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90] 
//      verticalTopBorder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
//      verticalBottomBorder = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99] 

const REQUIRED_NUMBER_OF_SHIPS = 10;
const PLAYER_NUMBER_OF_SHIPS = 5;


function gameboard() {
    // game grid
    let board = _createGrid();

    //place ship on game board
    _placeShip(0, 0, board);

    function receiveAttack({x, y}) {}

    function isSunk() {}

    return board;
}

function _createGrid(size = 10) {
    const numberOfCells = size * size;
    let grid = Array(numberOfCells).fill('')
        .map((cell) => cell = { hasShip: false, isHit: false });
        
    return grid;
}

function _placeShip(typeIndex, startPoint, board) {
    debugger
    let ship = createShip(SHIP_TYPES[typeIndex]);

    for (let i = 0; i < ship.length; i++) {
        if (ship.getDirection() === 'horizontal') {
            // TODO: check for edge cases
            board[startPoint + i].hasShip = true;
        } else {
            // TODO: check for edge cases
            board[startPoint + (10 * i)].hasShip = true;
        }
    }
    return board;
}

export { gameboard }
