import { gameboard } from './gameboard-module';
import { SHIP_LENGTH, SHIP_TYPES, randomPos } from './helpers';

function player() {
    let active = true;
    let board = gameboard();
    let numberOfShips = 0;
    let destroyedShips = 0;

    function getBoard() {
        return board.getBoard();
    }

    function getActive() {
        return active;
    }

    function getNumberOfShip() {
        return numberOfShips;
    }

    function checkDefeat() {
        return numberOfShips === destroyedShips;
    }

    function setShip(position) {
        // TODO: position
        if (numberOfShips < 5) {
            board.setShip(numberOfShips, position);
            numberOfShips++;
            return true;
        }
        return false;
    }

    function attack(position) {
        let state = nonPlayer.getBoard().receiveAttack(position);
        if (state) {
            active = false;
        }
    }

    function changeActive(nonPlayer) {
        if (active) {
            active = false;
            nonPlayer.changeActive();
        } else {
            active = true;
        }
    }

    function destroyShip() {
        destroyedShips++;
    }

    return { getBoard, getActive, getNumberOfShip, setShip, attack, changeActive, checkDefeat, destroyShip }
}

function nonPlayer() {
    let active = false;
    let board = gameboard();
    let numberOfShips = 0;
    let destroyedShips = 0;

    function getBoard() {
        return board;
    }

    function getActive() {
        return active;
    }

    function getNumberOfShip() {
        return numberOfShips;
    }

    function checkDefeat() {
        return numberOfShips === destroyedShips;
    }

    function setFleet() {
        for (let i = 0; i < SHIP_TYPES.length; i++) {
            board.setShip(i, randomPos());
        }
        return true;
    }

    function attack(player) {
        let invalid = true;
        do {
            let state = player.getBoard().receiveAttack(randomPos());
            if (state) {
                invalid = false;
                active = false;
            }
        }
        while(invalid)
    }

    function changeActive(player) {
        if (active) {
            active = false;
            player.changeActive();
        } else {
            active = true;
        }
    }

    function destroyShip() {
        destroyedShips++;
    }

    return { getBoard, getActive, getNumberOfShip, setFleet, attack, changeActive, checkDefeat, destroyShip }
}

export { player, nonPlayer }
