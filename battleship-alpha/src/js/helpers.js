const _width = 10;

const randomPos = () => { Math.floor(Math.random() * 100) };

const fleet = [
    {
        name: 'destroyer',
        direction: [
            [0, 1],
            [0, _width]
        ]
    },
    {
        name: 'submarine',
        direction: [
            [0, 1, 2],
            [0, _width, _width*2]
        ]
    },
    {
        name: 'cruiser',
        direction: [
            [0, 1, 2],
            [0, _width, _width*2]
        ]
    },
    {
        name: 'battleship',
        direction: [
            [0, 1, 2, 3],
            [0, _width, _width*2, _width*3]
        ]
    },
    {
        name: 'carrier',
        direction: [
            [0, 1, 2, 3, 4],
            [0, _width, _width*2, _width*3, _width*4]
        ]
    }
]

export { fleet }
