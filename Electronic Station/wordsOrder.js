'use strict';

const url = 'https://js.checkio.org/mission/words-order/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function wordsOrder(text, words) {
    text = text.split(' ');

    const indexes = [];

    words.forEach(word => {
        const idx = text.indexOf(word);
        if (idx > -1 && !indexes.includes(idx)) {
            indexes.push(idx);
        } else {
            return false;
        }
    });
    console.log(text, words);
    const res = indexes.join('') == [...indexes].sort().join('');
    console.log(res);
    return res;
}

console.log('Example:');
console.log(wordsOrder('hi world im here', ['world', 'here']));

// These "asserts" are used for self-checking
assert.strictEqual(wordsOrder('hi world im here', ['world', 'here']), true);
assert.strictEqual(wordsOrder('hi world im here', ['here', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here', ['world']), true);
assert.strictEqual(wordsOrder('hi world im here',
    ['world', 'here', 'hi']), false);
assert.strictEqualstrictEqual(wordsOrder('hi world im here',
    ['world', 'im', 'here']), true);
assert.strictEqual(wordsOrder('hi world im here',
    ['world', 'hi', 'here']), false);
assert.strictEqual(wordsOrder('hi world im here', ['world', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here',
    ['country', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here', ['wo', 'rld']), false);
assert.strictEqual(wordsOrder('', ['world', 'here']), false);
assert.strictEqual(wordsOrder('hi world world im here',
    ['world', 'world']), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");