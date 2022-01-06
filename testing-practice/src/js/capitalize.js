function capitalize(str) {
    let charArr = str.toLowerCase().split('');
    charArr.splice(0, 1, charArr[0].toUpperCase());
    let capitalized = charArr.join('');
    return capitalized;
}

export { capitalize }
