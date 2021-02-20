'use strict';

const url = 'https://js.checkio.org/mission/multiply-intro/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function multTwo(a, b) {
    return a * b;
}

console.log('Example:');
console.log(multTwo(3, 2));

// These "asserts" are used for self-checking
assert.strictEqual(multTwo(3, 2), 6);
assert.strictEqual(multTwo(0, 1), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");