'use strict';

const url = 'https://js.checkio.org/mission/count-digits/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function countDigits(text) {
    const result = text.match(/\d/g);

    if (result) {
        return result.length;
    } else {
        return 0;
    }

    // return text.match(/[\d]/g)?.length ?? 0;
}

console.log('Example:');
console.log(countDigits('hi'));

// These "asserts" are used for self-checking
assert.strictEqual(countDigits('hi'), 0);
assert.strictEqual(countDigits('who is 1st here'), 1);
assert.strictEqual(countDigits('my numbers is 2'), 1);
assert.strictEqual(countDigits('This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year'), 8);
assert.strictEqual(countDigits('5 plus 6 is'), 2);
assert.strictEqual(countDigits(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");