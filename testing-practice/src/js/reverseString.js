function reverseString(str) {
    let originalStrArr = str.split('');
    let reversedStrArr = [];

    originalStrArr.map((char) => {
        reversedStrArr.unshift(char);
    });

    let reversedStr = reversedStrArr.join('');
    return reversedStr;
}

export { reverseString }
