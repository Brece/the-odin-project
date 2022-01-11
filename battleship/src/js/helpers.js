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

const randomPos = () => Math.floor(Math.random() * 100);

export { SHIP_TYPES, SHIP_LENGTH, randomPos }
