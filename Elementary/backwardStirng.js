'use strict';

const url = 'https://js.checkio.org/mission/backward-string/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

const backwardString = (str) => [...str].reverse().join('');

// function backwardString(value) {
//     return [...value].reverse().join('');
// }

console.log('Example:');
console.log(backwardString('val'));

// These "asserts" are used for self-checking
assert.strictEqual(backwardString('val'), 'lav');
assert.strictEqual(backwardString(''), '');
assert.strictEqual(backwardString('ohho'), 'ohho');
assert.strictEqual(backwardString('123456789'), '987654321');

console.log("Coding complete? Click 'Check' to earn cool rewards!");