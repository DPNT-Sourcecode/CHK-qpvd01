'use strict';

const priceTable = {
    'A': { price: 50, offers: [{ quantity: 5, specialPrice: 200 }, { quantity: 3, specialPrice: 130 }] },
    'B': { price: 30, offers: [{ quantity: 2, specialPrice: 45 }] },
    'C': { price: 20, offers: null },
    'D': { price: 15, offers: null },
    'E': { price: 40, offers: [{ quantity: 2, freeItem: 'B' }] }
};

const inputValidation = (skus) => /^[A-E]*$/.test(skus);

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (!inputValidation(skus)) return -1

    // Count occurrences of each item
    const itemCount = {};
    for (let item of skus) {
        itemCount[item] = (itemCount[item] || 0) + 1;
    }

    // calculate total price
    let totalPrice = 0;
    for (let item in itemCount) {
        const count = itemCount[item];
        const { price, offers } = priceTable[item];

        if(offers) {
            if (item === 'E') {

            } else {
                
            }

        } else {
            totalPrice = totalPrice + (count * price);
        }

    }

    return totalPrice;

};


