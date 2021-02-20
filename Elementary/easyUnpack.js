'use strict';

const url = 'https://js.checkio.org/mission/easy-unpack/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function easyUnpack(values) {
    return [values[0], values[2], values.slice(-2)[0]];
    // return [values[0], values[2], values[values.length - 2]];
}

// Best solution
// const easyUnpack = (values) => [values[0], values[2], values[values.length-2]];

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));

// These "asserts" are used for self-checking
assert.deepStrictEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepStrictEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepStrictEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");