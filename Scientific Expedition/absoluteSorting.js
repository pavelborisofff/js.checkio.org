'use strict';

const url = 'https://js.checkio.org/mission/absolute-sorting/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function absoluteSorting(values) {
    
    values.sort(function(a,b) {
        return Math.abs(a) - Math.abs(b);
    });

    return values;
}

console.log('Example:');
console.log(absoluteSorting([-20, -5, 10, 15]));

// These "asserts" are used for self-checking
assert.deepStrictEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
assert.deepStrictEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3]);
assert.deepStrictEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");