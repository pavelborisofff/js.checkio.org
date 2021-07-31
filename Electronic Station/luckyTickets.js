'use strict';

const url = 'https://js.checkio.org/en/mission/mathematically-lucky-tickets/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function luckyTickets(value) {
    // your code here
    return [...value.slice(0,3)].reduce((sum, current) => sum + +current, 0) === [...value.slice(3)].reduce((sum, current) => sum + +current, 0);
}

console.log('Example:');
console.log(luckyTickets('000000'));

// These "asserts" are used for self-checking
assert.strictEqual(luckyTickets('000000'), true);
assert.strictEqual(luckyTickets('707409'), true);
assert.strictEqual(luckyTickets('595347'), false);
assert.strictEqual(luckyTickets('271353'), false);
assert.strictEqual(luckyTickets('000955'), false);
assert.strictEqual(luckyTickets('100478'), true);
assert.strictEqual(luckyTickets('100479'), false);
assert.strictEqual(luckyTickets('725126'), true);
assert.strictEqual(luckyTickets('836403'), false);
assert.strictEqual(luckyTickets('240668'), false);
assert.strictEqual(luckyTickets('082140'), true);
assert.strictEqual(luckyTickets('574699'), false);
assert.strictEqual(luckyTickets('324347'), false);
assert.strictEqual(luckyTickets('064377'), true);
assert.strictEqual(luckyTickets('111111'), false);
assert.strictEqual(luckyTickets('555555'), false);
assert.strictEqual(luckyTickets('777777'), false);
assert.strictEqual(luckyTickets('392039'), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");