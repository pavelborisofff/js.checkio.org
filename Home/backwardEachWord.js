'use strict';

const url = 'https://js.checkio.org/en/mission/backward-each-word/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function backwardStringByWord(text) {
    if (text) {
        const arr = text.match(/(\w+|\s+)/g);
        arr.forEach((word, i) => arr[i] = [...word].reverse().join(''));
        return arr.join('');
    }

    return '';
}

console.log('Example:');
console.log(backwardStringByWord(''));

// These "asserts" are used for self-checking
assert.strictEqual(backwardStringByWord(''), '');
assert.strictEqual(backwardStringByWord('world'), 'dlrow');
assert.strictEqual(backwardStringByWord('hello world'), 'olleh dlrow');
assert.strictEqual(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.strictEqual(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

console.log("Coding complete? Click 'Check' to earn cool rewards!");