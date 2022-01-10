import { SHIP_LENGTH } from './helpers';
// hit = object with coordinates?
// keep track of ship coordinates


function createShip(type) {
    const id = type;
    const length = SHIP_LENGTH[type];
    let direction = 'horizontal';
    let hits = 0;

    const getDirection = () => direction;
    const changeDirection = () => {
        return direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
    }
    const hit = () => hits++;
    const getHits = () => hits;

    const isSunk = () => hits === length;

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
