'use strict';

const url = 'https://js.checkio.org/mission/time-converter-24h-to-12h/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function timeConverter(dayTime) {
    let [hours, minutes] = dayTime.split(':');

    if (hours !== '00' && hours !== '12') {
        return `${hours % 12}:${minutes} ${hours < 12 ? "a.m." : "p.m."}`;
    } else {
        return `12:${minutes} ${hours < 12 ? "a.m." : "p.m."}`;
    }
}



console.log('Example:')
console.log(timeConverter('12:30'))

// These "asserts" are used for self-checking and not for an auto-testing
assert.strictEqual(timeConverter('12:30'), '12:30 p.m.')
assert.strictEqual(timeConverter('09:00'), '9:00 a.m.')
assert.strictEqual(timeConverter('23:15'), '11:15 p.m.')
console.log("Coding complete? Click 'Check' to earn cool rewards!");
