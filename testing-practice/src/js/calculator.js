const calculator = {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        throw new Error('Parameter type, not a number.')
    },

    substract(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        }
        throw new Error('Parameter type, not a number.')
    },

    divide(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a / b;
        }
        throw new Error('Parameter type, not a number.')
    },

    multiply(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a * b;
        }
        throw new Error('Parameter type, not a number.')
    }
}

export { calculator }
