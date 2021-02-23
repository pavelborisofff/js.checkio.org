'use strict';

const url = 'https://js.checkio.org/mission/sort-array-by-element-frequency/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function frequencySort(items) {
    const counts = {};

    // for (let i = 0; i < items.length; i++) {
    //     const item  = {
    //         items[i]  (counts[items[i]] + 1) || 1
    //     }
    // }

    counts.sort(function(a,b) {
        return b.count - a.count;
    });



    return [];
}

console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

// These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");