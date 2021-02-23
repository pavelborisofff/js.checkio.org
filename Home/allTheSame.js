'use strict';

const url = 'https://js.checkio.org/mission/all-the-same/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function allTheSame(elements) {
    const set = new Set(elements);
    return set.size < 2;
    // return elements.every(e => elements[0] === e);
    // return (new Set(elements)).size < 2;
}


console.log('Example:');
console.log(allTheSame([1, 1, 1]));

// These "asserts" are used for self-checking and not for an auto-testing

assert.strictEqual(allTheSame([1, 1, 1]), true);
assert.strictEqual(allTheSame([1, 2, 1]), false);
assert.strictEqual(allTheSame(['a', 'a', 'a']), true);
assert.strictEqual(allTheSame([]), true);
assert.strictEqual(allTheSame([1]), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");