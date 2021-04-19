'use strict';

const url = 'https://js.checkio.org/mission/all-upper-ii/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function isAllUpper(text)  {
    // your code here
    //return Boolean(text.trim().length) && Boolean(text.match(/[a-zA-Z]/)) && text === text.toUpperCase();
    return /^[^a-z]*$/.test(text) && /[A-Z]/.test(text);
}

console.log('Example:');
console.log(isAllUpper('ALL UPPER'));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");