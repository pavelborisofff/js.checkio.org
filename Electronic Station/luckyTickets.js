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
assert.equal(luckyTickets('000000'), true);
assert.equal(luckyTickets('707409'), true);
assert.equal(luckyTickets('595347'), false);
assert.equal(luckyTickets('271353'), false);
assert.equal(luckyTickets('000955'), false);
assert.equal(luckyTickets('100478'), true);
assert.equal(luckyTickets('100479'), false);
assert.equal(luckyTickets('725126'), true);
assert.equal(luckyTickets('836403'), false);
assert.equal(luckyTickets('240668'), false);
assert.equal(luckyTickets('082140'), true);
assert.equal(luckyTickets('574699'), false);
assert.equal(luckyTickets('324347'), false);
assert.equal(luckyTickets('064377'), true);
assert.equal(luckyTickets('111111'), false);
assert.equal(luckyTickets('555555'), false);
assert.equal(luckyTickets('777777'), false);
assert.equal(luckyTickets('392039'), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");