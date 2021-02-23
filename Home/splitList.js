'use strict';

const url = 'https://js.checkio.org/mission/split-list/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function splitList(values) {
    const index = Math.round(values.length / 2);

    return [
        values.slice(0, index),
        values.slice(index)
    ];
}

console.log('Example:');
console.log(splitList([1, 2, 3, 4, 5, 6]));

// These "asserts" are used for self-checking
assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
assert.deepEqual(splitList([1]), [[1], []]);
assert.deepEqual(splitList([]), [[], []]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
