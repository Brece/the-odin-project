function analyzeArray(arr) {
    // type error handling 
    if (!Array.isArray(arr)) {
        return new Error('Input value is not an array');
    }

    let length = arr.length;

    for (let i = 0; i < length; i++) {
        if (typeof arr[i] !== 'number') {
            return new Error('Array element is not type of number.');
        }
    }

    let min = _minValue(arr);
    let max = _maxValue(arr);
    let average = _averageValue(arr);
    
    return {
        average,
        min,
        max,
        length
    }
}

function _minValue(arr) {
    return Math.min(...arr);
}

function _maxValue(arr) {
    return Math.max(...arr);
}

function _averageValue(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

export { analyzeArray }
