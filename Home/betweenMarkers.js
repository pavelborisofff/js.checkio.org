'use strict';

const url = 'https://js.checkio.org/en/mission/between-markers/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function betweenMarkers(text, begin, end) {
    // let open = text.indexOf(begin);
    // open = (open > -1) ? open + begin.length: 0;

    // let close = text.indexOf(end);
    // close = (close > -1) ? close : text.length;

    // return text.slice(open, close);
    return text.slice(
        text.includes(begin) ? text.indexOf(begin) + begin.length: 0,
        text.includes(end) ? text.indexOf(end) : text.length
    );
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple');

assert.strictEqual(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.strictEqual(betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>"), 'My new site');
assert.strictEqual(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No');
assert.strictEqual(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi');
assert.strictEqual(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi');
assert.strictEqual(betweenMarkers('No <hi>', '>', '<'), '');
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");