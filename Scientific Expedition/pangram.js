'use strict';

const url = 'https://js.checkio.org/mission/pangram/';

const assert = newFunction();

function newFunction() {
  return require('assert');
}

function checkPangram(text) {
  // your code here
  return (new Set(text.replace(/[^a-zA-Z]/g, '').toLowerCase())).size === 26;
}

console.log('Example:');
console.log(checkPangram(('The quick brown fox jumps over the '
+ 'lazy dog.')));

// These "asserts" are used for self-checking
assert.equal(checkPangram(('The quick brown fox jumps over the '
+ 'lazy dog.')), true);
assert.equal(checkPangram('ABCDEF'), false);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxyz'), true);
assert.equal(checkPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), true);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxy'), false);
assert.equal(checkPangram(('Bored? Craving a pub quiz fix? Why, '
+ 'just come to the Royal Oak!')), true);
assert.equal(checkPangram(("As quirky joke, chefs won't pay "
+ 'devil magic zebra tax.')), true);
assert.equal(checkPangram(('Six big devils from Japan quickly '
+ 'forgot how to walt.')), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");

