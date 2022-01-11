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
    const numberOfCells = 100;
    let playerBoard = _createGrid();

    // methods
    function _createGrid () {
        let grid = Array(numberOfCells).fill('')
            .map((cell) => cell = { isHit: false });
            
        return grid;
    }

    function getBoard () { return playerBoard };

    function setShip (typeIndex, startPos) {
        let ship = createShip(typeIndex);
    
        _checkBorder(ship, startPos, playerBoard);
        
        return playerBoard;
    }
    // example: setShip(0, 0, playerBoard);

    // bind mouse cursor to first ship position as starting point horizontally and vertically;
    // only need to check for edge cases on the right and bottom 
    function _checkBorder (ship, startPos, board) {
        let length = ship.length;
        let rightBorder = Math.ceil((startPos + 0.1)/10) * 10;
        let bottomBorder = 100;

        if (ship.getDirection() === 'horizontal') {
            if (startPos + (length - 1) < rightBorder) {
                for (let i = 0; i < length; i++) {
                    board[startPos + i ]['ship'] = ship;
                }
            } else {
                throw new Error('Invalid horizontal placement.');
            }
        } else {
            if (startPos + ((length - 1) * 10) < bottomBorder) {
                for (let i = 0; i < length; i++) {
                    board[startPos + (i * 10) ]['ship'] = ship;
                }
            } else {
                throw new Error('Invalid vertical placement.');
            }
        }
    }

    function receiveAttack(position) {
        const hitPosition = playerBoard[position];

        if (!hitPosition.isHit) {
            hitPosition.isHit = true;
            // display on gameboard with different background color
            
            if (hitPosition.ship !== undefined) {
                let ship = hitPosition.ship;
                ship.hit();
                // display on gameboard with 'X'
                
                _isSunk(ship);
            }

            return true;
        } 
        else if (hitPosition.isHit) {
            throw new Error('Position has already been hit.');
        }

        return false;
    }

    function _isSunk(ship) {
        if (ship.isSunk()) {
            // give feedback on display that that ship has been shot down
        }
    }

    return { getBoard, setShip, receiveAttack, _isSunk };
}





export { gameboard }
