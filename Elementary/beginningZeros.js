'use strict';

const url = 'https://js.checkio.org/mission/beginning-zeros/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}


function beginningZeros(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
            return i;
        }
    }
    
    return text.length;
}

console.log('Example:');
console.log(beginningZeros('100'));

// These "asserts" are used for self-checking
assert.strictEqual(beginningZeros('100'), 0);
assert.strictEqual(beginningZeros('001'), 2);
assert.strictEqual(beginningZeros('100100'), 0);
assert.strictEqual(beginningZeros('001001'), 2);
assert.strictEqual(beginningZeros('012345679'), 1);
assert.strictEqual(beginningZeros('0000'), 4);

console.log("Coding complete? Click 'Check' to earn cool rewards!");