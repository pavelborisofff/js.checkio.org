'use strict';

const url = 'https://js.checkio.org/mission/follow-instructions/';

const assert = newFunction();

function newFunction() {
  return require('assert');
}

function follow(instructions) {
  // your code here
  const coords = {
    x: 0,
    y: 0,
    f: () => coords.y++,
    b: () => coords.y--,
    r: () => coords.x++,
    l: () => coords.x--,
  };

  [...instructions].map(c => coords[c]());
  
  return [coords.x, coords.y];
}

console.log('Example:');
console.log(follow('fflff'));

// These "asserts" are used for self-checking
assert.deepEqual(follow('fflff'), [-1, 4]);
assert.deepEqual(follow('ffrff'), [1, 4]);
assert.deepEqual(follow('fblr'), [0, 0]);
