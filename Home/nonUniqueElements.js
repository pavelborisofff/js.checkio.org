'use strict';

const url = 'https://js.checkio.org/mission/non-unique-elements/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function nonUniqueElements(data) {
    const counts = {};

    for (let i = 0; i < data.length; i++) {
        counts[data[i]] = (counts[data[i]] + 1) || 1;
    }

    const result = [];

    data.forEach(num => {
        if (counts[num] > 1) {
            result.push(num);
        }
    });

    return result;

    // var count = element => data.filter(x => x == element).length > 1
    // return data.filter(count)

    // return data.filter((v, i, self) => {
    //     return self.indexOf(v) !== self.lastIndexOf(v);
    // })
}

console.log('Example:');
console.log(nonUniqueElements([1, 2, 3, 1, 3]));

assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
assert.deepStrictEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
assert.deepStrictEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");