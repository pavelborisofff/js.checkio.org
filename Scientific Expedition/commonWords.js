'use strict';

const url = 'https://js.checkio.org/en/mission/common-words/';

const assert = newFunction();

function newFunction() {
  return require('assert');
}

function commonWords(line1, line2) {
  const listOne = line1.split(','),
        listTwo = line2.split(','),
        result = [];

  listOne.forEach(word => {
    if (listTwo.includes(word)) result.push(word);
  });

  return result.sort().join(',');
}

console.log('Example:');
console.log(commonWords('hello,world', 'hello,earth'));

// These "asserts" are used for self-checking
assert.equal(commonWords('hello,world', 'hello,earth'), 'hello');
assert.equal(commonWords('one,two,three', 'four,five,six'), '');
assert.equal(commonWords('one,two,three',
  'four,five,one,two,six,three'), 'one,three,two');

console.log("Coding complete? Click 'Check' to earn cool rewards!");