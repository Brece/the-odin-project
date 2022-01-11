import { gameboard } from "../js/gameboard-module.js";

const board = gameboard();

const carrier = {
    id: 'carrier',
    length: 5,
    getDirection: () => direction,
    changeDirection: () => {
        return direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
    },
    hit: () => hits++,
    getHits: () => hits,
    isSunk: () => hits === length,
};

const carrierVertical = {
    id: 'carrier',
    length: 5,
    hit: 0,
    getDirection: () => direction,
    changeDirection: () => {
        return direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
    },
    hit: () => hits++,
    getHits: () => hits,
    isSunk: () => hits === length,
};

const firstPosHit = () => {
    board.receiveAttack(0);
    return board.getBoard()[0];
}

const alreadyHitPos = () => {
    board.receiveAttack(0);
    board.receiveAttack(0);
}

const hitShipOnFirstPos = () => {
    board.setShip(0, 0);
    board.receiveAttack(0);
    let ship = board.getBoard()[0].ship;
    return ship.getHits();
}

const shipIsSunk = () => {
    board.setShip(0, 0);
    for (let i = 0; i < 5; i++) {
        board.receiveAttack(0);
    }
    let ship = board.getBoard()[4].ship;
    return ship.isSunk();
}

test.skip('create initial gameboard grid with 100 cells', () => {
    expect(board.getBoard()).toMatchObject(
        [   
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false },
            { isHit: false }
        ]
    )
});

test.skip('place ship carrier with length 5 HORIZONTALLY in cell board[0]', () => {
    expect(JSON.stringify(board.setShip(0, 0)))
    .toEqual(JSON.stringify(
    [
        { isHit: false, ship: carrier },
        { isHit: false, ship: carrier },
        { isHit: false, ship: carrier },
        { isHit: false, ship: carrier },
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false }
    ]));
});

test.skip('place ship carrier with length 5 VERTICALY in cell board[0]', () => {
    expect(JSON.stringify(board.setShip(0, 0)))
    .toEqual(JSON.stringify(
    [
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false, ship: carrier },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false },
        { isHit: false }
    ]));
});

test.skip('throws ERROR on HORIZONTAL edge case', () => {
    expect( () => {
        board.setShip(56, 0);
    })
    .toThrow('Invalid horizontal placement.');
});

test.skip('throws ERROR on VERTICAL edge case', () => {
    expect( () => {
        board.setShip(69, 0);
    })
    .toThrow('Invalid vertical placement.');
});

test.skip('register a hit, set "isHit = true"', () => {
    expect(firstPosHit())
    .toEqual({ isHit: true });
});

test.skip('Position already hit throws error', () => {
    expect( () => {
        alreadyHitPos();
    })
    .toThrow('Position has already been hit.');
});

test.skip('register hit on ship and increases hit counter by 1', () => {
    expect(hitShipOnFirstPos())
    .toEqual(1);
});

test.skip('register hits on ship and checks if it is sunk, returns "isSunk = true"', () => {
    expect(shipIsSunk())
    .toEqual(true);
});


// check hit counter of ship: board.setShip(0, 0);