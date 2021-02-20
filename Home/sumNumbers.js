'use strict';

const url = 'https://js.checkio.org/en/mission/sum-numbers/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function sumNumbers(test) {
    const arr = test.match(/(\d+[^\w])|(\d+$)/g);
    
    if (!arr) {
        return 0;
    }

    return arr.reduce((i, j) => parseInt(i) + parseInt(j), 0);
}

console.log('Example:');
console.log(sumNumbers('hi'));

// These "asserts" are used for self-checking
assert.strictEqual(sumNumbers('hi'), 0);
assert.strictEqual(sumNumbers('who is 1st here'), 0);
assert.strictEqual(sumNumbers('my numbers is 2'), 2);
assert.strictEqual(sumNumbers('This picture is an oil on canvas ' + 'painting by Danish artist Anna ' + 'Petersen between 1845 and 1910 year'), 3755);
assert.strictEqual(sumNumbers('5 plus 6 is'), 11);
assert.strictEqual(sumNumbers(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");