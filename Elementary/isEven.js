'use strict';

const url = 'https://js.checkio.org/en/mission/is-even/';
const assert = newFunction();
// const assert = require('assert');

function newFunction() {
    return require('assert');
}

function isEven(num) {
    return (num % 2) ? false : true;
}

console.log('Example:');
console.log(isEven(2));

// These "asserts" are used for self-checking
assert.strictEqual(isEven(2), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(isEven(0), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");