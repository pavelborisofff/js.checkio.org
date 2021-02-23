'use strict';

const url = 'https://js.checkio.org/mission/goes-right-after/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

function goesAfter(word, first, second) {
    if (word.indexOf(first) > word.indexOf(second)) {
        return false;
    }
    
    return Boolean(word.match(`${first}${second}`));
}

if (!global.is_checking) {
    console.log('Example:');
    console.log(goesAfter('world', 'w', 'o'));

    // These "asserts" are used for self-checking
    assert.strictEqual(goesAfter("almaz","m","a"), false);
    assert.strictEqual(goesAfter('world', 'w', 'o'), true);
    assert.strictEqual(goesAfter('world', 'w', 'r'), false);
    assert.strictEqual(goesAfter('world', 'l', 'o'), false);
    assert.strictEqual(goesAfter('panorama', 'a', 'n'), true);
    assert.strictEqual(goesAfter('list', 'l', 'o'), false);
    assert.strictEqual(goesAfter('', 'l', 'o'), false);
    assert.strictEqual(goesAfter('list', 'l', 'l'), false);
    assert.strictEqual(goesAfter('world', 'd', 'w'), false);

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}