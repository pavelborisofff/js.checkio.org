'use strict';

const url = 'https://js.checkio.org/mission/three-words/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function threeWords(text) {
    // return Boolean(text.match(/([a-zA-Z]+\s){2}[a-zA-Z]+/g));
    return !!text.match(/(^|\s)([a-zA-Z]+(\s|$)){3}/g);
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.strictEqual(threeWords("Hello World hello"), true);
assert.strictEqual(threeWords("He is 123 man"), false);
assert.strictEqual(threeWords("1 2 3 4"), false);
assert.strictEqual(threeWords("bla bla bla bla"), true);
assert.strictEqual(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");