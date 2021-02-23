'use strict';

const url = 'https://js.checkio.org/en/mission/between-markers/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function secondIndex(text, symbol) {
    const length = text.split(symbol, 2).join(symbol).length;
    return (length !== text.length) ? length : undefined;
}

console.log('Example');
console.log(secondIndex("sims", "s"));

// These "asserts" are used for self-checking and not for an auto-testing
assert.strictEqual(secondIndex("sims", "s"), 3);
assert.strictEqual(secondIndex("find the river", "e"), 12);
assert.strictEqual(secondIndex("hi", " "), undefined);
assert.strictEqual(secondIndex("hi mayor", " "), undefined);
assert.strictEqual(secondIndex("hi mr Mayor", " "), 5);
console.log("You are awesome! All tests are done! Go Check it!");