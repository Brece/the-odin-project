import './css/styles.css';
import { gameboard } from './js/gameboard-module';
import { createShip } from './js/ship.module';

const board = gameboard();
const hitShipOnFirstPos = () => {
    board.setShip(0, 0);
    board.receiveAttack(0);
    return board.getBoard()[0];
}

// console.log(hitShipOnFirstPos());
// console.log(board.getBoard()[0].ship.getHits());