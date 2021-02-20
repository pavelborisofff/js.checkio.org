'use strict';

const url = 'https://js.checkio.org/mission/max-digit/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function maxDigit(value) {
    return Number([...String(value)].sort().slice(-1));
}

console.log('Example:');
console.log(maxDigit(0));

// These "asserts" are used for self-checking
assert.strictEqual(maxDigit(0), 0);
assert.strictEqual(maxDigit(52), 5);
assert.strictEqual(maxDigit(634), 6);
assert.strictEqual(maxDigit(1), 1);
assert.strictEqual(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");