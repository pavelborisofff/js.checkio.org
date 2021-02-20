'use strict';

const url = 'https://js.checkio.org/mission/nearest-value/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function nearestValue(values, search) {
    let nearest = values[0];
    let delta = Math.abs(search - nearest);
    
    for (let i = 1; i < values.length; i++) {
        if (Math.abs(search - values[i]) < delta) {
            nearest = values[i];
            delta = Math.abs(search - nearest);
        } else if (Math.abs(search - values[i]) === delta) { 
            nearest = (values[i] < nearest) ? values[i] : nearest;
            delta = Math.abs(search - nearest);
        }
    }

    return nearest;

    // const [f, ...o] = values.sort((a,b) => a - b );
    // return o.reduce((acc, cur) => Math.abs(cur - search) < Math.abs(acc - search) ? cur : acc, f);
}

console.log('Example:');
// console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

// These "asserts" are used for self-checking
assert.strictEqual(nearestValue([0,-2],-1), -2);
assert.strictEqual(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.strictEqual(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.strictEqual(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.strictEqual(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.strictEqual(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.strictEqual(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.strictEqual(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.strictEqual(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");