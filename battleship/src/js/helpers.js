const SHIP_TYPES = [
    'carrier',
    'battleship',
    'submarine',
    'cruiser',
    'destroyer'
];

const SHIP_LENGTH = {
    carrier: 5,
    battleship: 4,
    submarine: 3,
    cruiser: 3,
    destroyer: 2
};

const _randomSize = (size = 10) => Math.floor(Math.random() * size);

const randomCoord = (size = 10) => {
    return { x: _randomSize(size), y: _randomSize(size) }
};

export { SHIP_TYPES, SHIP_LENGTH, randomCoord }
