'use strict';

const url = 'https://js.checkio.org/mission/split-pairs/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}


function splitPairs(text) {
    if (text.length === 0) {
        return [];
    } else {
        text = (text.length % 2) ? text + '_' : text;
        return text.match(/.{2}/g);
    }
}

console.log('Example:');
console.log(splitPairs('abcd'));

// These "asserts" are used for self-checking
assert.deepStrictEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepStrictEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepStrictEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepStrictEqual(splitPairs('a'), ['a_']);
assert.deepStrictEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");