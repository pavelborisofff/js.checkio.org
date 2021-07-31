'use strict';

const url = 'https://js.checkio.org/mission/ascending-list/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function isAscending(values) {
    // your code here
    if (values.length === 0) return true;

    for (let i = 0; i < values.slice(1).length; i++ ) {
        if (values[i] >= values[i + 1]) return false;
    }

    return true;
}

console.log('Example:');
console.log(isAscending([-5, 10, 99, 123456]));

// These "asserts" are used for self-checking
assert.deepStrictEqual(isAscending([-5, 10, 99, 123456]), true);
assert.deepStrictEqual(isAscending([99]), true);
assert.deepStrictEqual(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
assert.deepStrictEqual(isAscending([]), true);
assert.deepStrictEqual(isAscending([1, 1, 1, 1]), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");