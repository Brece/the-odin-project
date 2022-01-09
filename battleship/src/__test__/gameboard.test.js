import { gameboard } from "../js/gameboard.js";

const board = Array(100).fill({ hasShip: false, isHit: false });

test('create gameboard grid', () => {
    expect(gameboard()).toMatchObject(Array(100).fill(board));
});

test.only('place ship carrier with length 5 horizontally in cell board[0]', () => {
    expect(gameboard()).toMatchObject([
        { hasShip: true, isHit: false },
        { hasShip: true, isHit: false },
        { hasShip: true, isHit: false },
        { hasShip: true, isHit: false },
        { hasShip: true, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false },
        { hasShip: false, isHit: false }
    ]);
});
