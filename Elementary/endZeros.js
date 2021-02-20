'use strict';

const url = 'https://js.checkio.org/en/mission/is-even/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function endZeros(value, index = 0) {
    if (value === 0) {
        return 1;
    }
    
    if (value % 10) {
        return index;
    } else {
        return endZeros(value / 10, ++index);
    }
}

console.log('Example:');
console.log(endZeros(0));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(101), 0);
assert.strictEqual(endZeros(245), 0);
assert.strictEqual(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");