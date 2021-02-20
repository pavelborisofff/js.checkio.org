'use strict';

const url = 'https://js.checkio.org/mission/acceptable-password-i/solve/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function isAcceptablePassword(password) {
    return password.length > 6;
}

console.log('Example:');
console.log(isAcceptablePassword('short'));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword('short'), false);
assert.strictEqual(isAcceptablePassword('muchlonger'), true);
assert.strictEqual(isAcceptablePassword('ashort'), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");