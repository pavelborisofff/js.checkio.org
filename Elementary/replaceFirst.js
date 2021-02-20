'use strict';

const url = 'https://js.checkio.org/mission/replace-first/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function replaceFirst(values) {
    // const first =  values[0];

    // if (first === undefined) {
    //     return values;
    // } else {
    //     values.push(first);
    //     return values.slice(1);
    // }   

    return values.length > 0 ? values.concat(values[0]).slice(1): values;
}



console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));

// These "asserts" are used for self-checking
assert.deepStrictEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepStrictEqual(replaceFirst([1]), [1]);
assert.deepStrictEqual(replaceFirst([]), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");