'use strict';

const url = 'https://js.checkio.org/en/mission/is-even/';

const assert = newFunction();
// const assert = require('assert');

function newFunction() {
    return require('assert');
}

function firstWord(text) {
    const result = text.match(/[\w']+/);
    return (result) ? result[0] : '';
}


console.log('Example:');
console.log(firstWord("Hello world"));

// These "asserts" using for self-checking and not for auto-testing
assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord(" a word "), "a");
assert.strictEqual(firstWord("don't touch it"), "don't");
assert.strictEqual(firstWord("greetings, friends"), "greetings");
assert.strictEqual(firstWord("... and so on ..."), "and");
assert.strictEqual(firstWord("hi"), "hi");
console.log("Coding complete? Click 'Check' to earn cool rewards!");