'use strict';

const validSKUs = ['A', 'B', 'C', 'D']
const inputValidation = (skus) => {
    let validInput = true;
    for (let value of skus) {
        if (!validSKUs.includes(value.trim())) {
            validInput = false;
            break;
        }
    }
   return validInput;
}
//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (!inputValidation()) return -1
    const countMap = skus.reduce((acc, value) => {
        value = value.trim();
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {})

    throw new Error("method not implemented");
};


