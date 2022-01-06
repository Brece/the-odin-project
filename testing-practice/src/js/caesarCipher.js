function caesarCipher(str, shift) {
    let shiftedStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let shiftedChar = _shiftedChar(char, shift);
        shiftedStr += shiftedChar;
    }

    return shiftedStr;
}

function _shiftedChar(char, shift) {
    let code = char.charCodeAt();

    // check for uppercase character
    if (code >= 65 && code <= 90) {
        if (code + shift > 90) {
            code = 64 (code + shift - 90);
        } else {
            code += shift;
        }
    }

    // check for lowercase character
    if (code >= 97 && code <= 122) {
        if (code + shift > 122) {
            code = 96 + (code + shift - 122);
        } else {
            code += shift;
        }
    }

    // shifted ASCII code
    return String.fromCharCode(code);
}

export { caesarCipher }
