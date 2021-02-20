'use strict';

const url = 'https://js.checkio.org/en/mission/first-word-simplified/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function firstWord(text) {
    return text.split(' ')[0];
}

console.log('Example:');
console.log(firstWord('Hello world'));

// These "asserts" are used for self-checking
assert.strictEqual(firstWord('Hello world'), 'Hello');
assert.strictEqual(firstWord('a word'), 'a');
assert.strictEqual(firstWord('hi'), 'hi');

console.log("Coding complete? Click 'Check' to earn cool rewards!");