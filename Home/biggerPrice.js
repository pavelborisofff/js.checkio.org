'use strict';

const url = 'https://js.checkio.org/en/mission/backward-each-word/';

const assert = newFunction();

function newFunction() {
    return require('assert');
}

// interface Stock {
//     name: string,
//     price: number,
// };



function biggerPrice(limit, data) {
    data.sort(function(a,b) {
        return b.price - a.price;
    });

    console.log(data);

    return data.slice(0, limit);
}

console.log('Example:');
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]));

assert.deepStrictEqual(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]), [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
]);
assert.deepStrictEqual(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}]);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");

