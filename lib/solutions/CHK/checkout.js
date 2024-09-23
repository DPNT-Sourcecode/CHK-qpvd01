'use strict';

const priceTable = {
    'A': { price: 50, offer: { quantity: 3, specialPrice: 130 } },
    'B': { price: 30, offer: { quantity: 2, specialPrice: 45 } },
    'C': { price: 20, offer: null },
    'D': { price: 15, offer: null }
};

const inputValidation = (skus) => /^[A-D]*$/.test(skus);

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




