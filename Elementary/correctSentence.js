'use strict';

const url = 'https://js.checkio.org/mission/correct-sentence/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function correctSentence(text) {
    text[0].toUpperCase() + text.slice(1) + (text.slice(-1) == '.' ? '' : '.')
    return text[0].toUpperCase() + text.slice(1) + (text.slice(-1) == '.' ? '' : '.');
}

console.log('Example:');
console.log(correctSentence('greetings, friends'));

// These "asserts" are used for self-checking
assert.strictEqual(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.strictEqual(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.strictEqual(correctSentence('Greetings, friends.'), 'Greetings, friends.');

console.log("Coding complete? Click 'Check' to earn cool rewards!");