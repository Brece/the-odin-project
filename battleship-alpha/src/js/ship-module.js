import { fleet } from './helpers';

function setShip(ship, grid) {
    let randomDirection = Math.floor(Math.random() * ship.direction.length);
    let current = ship.direction[randomDirection];
    let direction;

    if (randomDirection === 0) { direction = 1 }
    if (randomDirection === 1) { direction = 10 }

    let randomStart = Math.abs(Math.floor(Math.random() * grid.length - (ship.direction[0].length * direction)));

    const isTaken = current.some( (index) => grid[randomStart + index].classList.contains('isTaken'));

    const isAtRightEdge = current.some( (index) => (randomStart + index) % 10 === 9);
    const isAtLeftEdge = current.some( (index) => (randomStart + index) % 10 === 0);

    if (!isTaken && !isAtLeftEdge && !isAtRightEdge) {
        current.forEach( (index) => {grid[randomStart + index].classList.add('isTaken', ship.name)});
    } else {
        setShip(ship, grid);
    }
}

export { setShip }
