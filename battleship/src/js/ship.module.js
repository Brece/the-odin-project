import { SHIP_LENGTH, SHIP_TYPES } from './helpers';
// hit = object with coordinates?
// keep track of ship coordinates


function createShip(typeIndex) {
    const id = SHIP_TYPES[typeIndex];
    const length = SHIP_LENGTH[id];
    let direction = 'horizontal';
    let hits = 0;

    function getDirection () { return direction };
    function changeDirection () {
        return direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
    }
    function hit () { hits++ };
    function getHits () { return hits };

    function isSunk () { return hits === length };

    return {
        id,
        length,
        hit,
        getHits,
        getDirection,
        changeDirection,
        isSunk
    }
}

export { createShip }
