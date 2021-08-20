'use strict';

const url = 'https://js.checkio.org/en/mission/bird-language/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function translate(text) {
    // your code here
    const wovel = 'aeiouy';

    let result = text.match(/([^aeiouy\s]).|(\s)|[aeiouy]{3}/g)
    return result.map(a => a[0]).join('');
}

console.log('Example:');
console.log(translate('hieeelalaooo'));

// These "asserts" are used for self-checking
assert.equal(translate('hieeelalaooo'), 'hello');
assert.equal(translate('hoooowe yyyooouuu duoooiiine'), 'how you doin');
assert.equal(translate('aaa bo cy da eee fe'), 'a b c d e f');
assert.equal(translate('sooooso aaaaaaaaa'), 'sos aaa');

console.log("Coding complete? Click 'Check' to earn cool rewards!");