'use strict';

const url = 'https://js.checkio.org/mission/words-order/';

const assert = newFunction();

function newFunction() {
  return require('assert');
}

function wordsOrder(text, words) {
  if (new Set(words).size != words.length) return false;

  let lastWordIndex = -1;

  for (let i = 0; i < words.length; i++) {
    const index = text.split(' ').indexOf(words[i]);

    if (index < 0) {
      return false;
    }

    if (lastWordIndex < index) {
      lastWordIndex = index;
    } else {
      return false;
    }
  }

  return true;
}

console.log('Example:');
console.log(wordsOrder('hi world im here', ['world', 'here']));

// These "asserts" are used for self-checking
assert.strictEqual(wordsOrder('hi world im here', ['world', 'here']), true);
assert.strictEqual(wordsOrder('hi world im here', ['here', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here', ['world']), true);
assert.strictEqual(wordsOrder('hi world im here', ['world', 'here', 'hi']), false);
assert.strictEqual(wordsOrder('hi world im here',['world', 'im', 'here']), true);
assert.strictEqual(wordsOrder('hi world im here', ['world', 'hi', 'here']), false);
assert.strictEqual(wordsOrder('hi world im here', ['world', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here', ['country', 'world']), false);
assert.strictEqual(wordsOrder('hi world im here', ['wo', 'rld']), false);
assert.strictEqual(wordsOrder('', ['world', 'here']), false);
assert.strictEqual(wordsOrder('hi world world im here', ['world', 'world']), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");