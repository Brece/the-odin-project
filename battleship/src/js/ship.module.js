// length = number
// hit = object with coordinates?
// sunk = boolean
// keep track of ship coordinates

function ship(length) {
    return {
        length: length,
        hit: function (num) {
            // num marks the position that is hit
        },
        isSunk: function () {
            // based on length and positions hit
            // sum of hit positions = ship.length
        }
    }
}

export { ship }
