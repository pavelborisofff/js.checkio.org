'use strict';

const url = 'https://js.checkio.org/en/mission/long-repeat/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function longRepeat(line) {
    // your code here
    return (line.length > 0) ? line.match(/(.)\1*/g).sort((a, b) => b.length - a.length)[0].length : 0;
}

console.log('Example:');
console.log(longRepeat('sdsffffse'));

// These "asserts" are used for self-checking
assert.equal(longRepeat('sdsffffse'), 4);
assert.equal(longRepeat('ddvvrwwwrggg'), 3);

console.log("Coding complete? Click 'Check' to earn cool rewards!");