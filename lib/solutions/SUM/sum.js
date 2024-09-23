'use strict';

const inputValidation = (x, y) => {
    if (typeof x!== 'number' || typeof y!== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    if (x < 0 || y < 0) {
        throw new Error('Both inputs must be non-negative');
    }
    if (x > 100 || y > 100) {
        throw new Error('Both inputs must be less than or equal to 100');
    }

}
module.exports = function sum (x, y) {
    inputValidation(x, y);
    return x + y;
};


