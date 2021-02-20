'use strict';

const url = 'https://js.checkio.org/mission/remove-all-before/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function removeAllBefore(values, b) {
    const index = values.indexOf(b);
    return index > 0 ? values.slice(index) : values;
}

console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));

// These "asserts" are used for self-checking
assert.deepStrictEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert.deepStrictEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert.deepStrictEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
assert.deepStrictEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert.deepStrictEqual(removeAllBefore([], 0), []);
assert.deepStrictEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");