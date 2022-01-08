import { ship } from './ship.module';

// gameboard 10 x 10 grid

function gameboard(ship) {
    // coordinates to keep track of already hit spots
    let xCoor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let yCoor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // place ships at specific coordinates
    // e.g. ship{
    //          length: 3,
    //          xCoor: [x, x, x],
    //          yCoor: [y, y, y]
    //          }
    //

    function receiveAttack({x, y}) {

    }

    // if ship.isSunk() then console.log("message");
}

export { gameboard }
