'use strict';

const url = 'https://js.checkio.org/mission/between-markers-simplified/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}


function betweenMarkers(line, left, right) {
    const specialSigns = '!$%^&*()_+|~-=`{}[]:";\'<>?,./';
    left = (specialSigns.indexOf(left) == -1) ? left : '\\' + left;
    right = (specialSigns.indexOf(right) == -1) ? right : '\\' + right;
    return line.match(`${left}(.*)${right}`)[1];
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.strictEqual(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.strictEqual(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.strictEqual(betweenMarkers('What is ><', '>', '<'), '');
assert.strictEqual(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");