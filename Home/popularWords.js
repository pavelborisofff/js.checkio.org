'use strict';

const url = 'https://js.checkio.org/mission/non-unique-elements/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function popularWords(text, words) {
    text = text.toLowerCase().split(/\s/).sort();

    const result = {};

    words.forEach(word => {
        result[word] = (text.includes(word)) ? text.lastIndexOf(word) - text.indexOf(word) + 1 : 0;
    });

    return result;
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))