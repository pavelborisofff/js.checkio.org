'use strict';

const url = 'https://js.checkio.org/mission/sort-array-by-element-frequency/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function frequencySort(items) {
    const counts = {};

    items.forEach(item => {
        if (item in counts) {
            counts[item]++;
        } else {
            counts[item] = 1 / (items.indexOf(item) + 1);
        }
    });

    items.sort(function(a,b) {
        return counts[b] - counts[a];
    });

    return items;
}

// console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

// These "asserts" are used for self-checking and not for an auto-testing
assert.deepStrictEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepStrictEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepStrictEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepStrictEqual(frequencySort([]), []);
assert.deepStrictEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");