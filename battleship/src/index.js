import './css/styles.css';
import { initHTML } from './js/html-module';
import { initGame } from './js/game-module';
import { gameboard } from './js/gameboard-module';
import { createShip } from './js/ship.module';
import { player, nonPlayer } from './js/player-module';

// const board = gameboard();
// const hitShipOnFirstPos = () => {
//     board.setShip(0, 0);
//     board.receiveAttack(0);
//     return board.getBoard()[0];
// }

// const pc = player();
// const npc = nonPlayer();

// console.log(hitShipOnFirstPos());
// console.log(board.getBoard()[0].ship.getHits());

// console.log({pc, npc});

document.addEventListener('DOMContentLoaded', () => {
    initHTML();
    initGame();
});
