'use strict';

const priceTable = {
    'A': 50,
    'B': 30,
    'C': 20,
    'D': 15
}

const offersTable = {
    '3A': 130,
    '2B': 45
}
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

    // Build the result in the format of 3A, 2B, etc.
    let result = '';
    for (let [key, count] of Object.entries(countMap)) {
        result += `${count}${key}`;
    }



};



