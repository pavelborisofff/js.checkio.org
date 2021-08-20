'use strict';

const url = 'https://js.checkio.org/mission/sum-by-type/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function sumByTypes(values) {
    // your code here
    const result = ['', 0];

    values.forEach(value => {
        const i = +(typeof value === 'number');

        result[i] = result[i] + value;
    })

    return result;
}

console.log('Example:');
console.log(sumByTypes([]));

// These "asserts" are used for self-checking
assert.equal(sumByTypes([]), ['', 0]);
assert.strictEqual(sumByTypes([1, 2, 3]), ['', 6]);
assert.strictEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
assert.strictEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
assert.strictEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
assert.strictEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");