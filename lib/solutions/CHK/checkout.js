'use strict';

const priceTable = {
    '': 0,
    'A': { price: 50, offer: { quantity: 3, specialPrice: 130 } },
    'B': { price: 30, offer: { quantity: 2, specialPrice: 45 } },
    'C': { price: 20, offer: null },
    'D': { price: 15, offer: null }
};

const inputValidation = (skus) => /^[A-D]*$/.test(skus);

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (!inputValidation()) return -1

    // Count occurrences of each item
    const itemCount = {};
    for (let item of skus) {
        itemCount[item] = (itemCount[item] || 0) + 1;
    }

    // calculate total price
    let totalPrice = 0;
    for (let item in itemCount) {
        const count = itemCount[item];
        const { price, offer } = priceTable[item];

        if (offer) {
            // Apply special offer
            const offerSets = Math.floor(count / offer.quantity);
            const remainingItems = count % offer.quantity;
            totalPrice += offerSets * offer.specialPrice + remainingItems * price;
        } else {
            // No offer, just multiply by item price
            totalPrice += count * price;
        }
    }

    return totalPrice;

};






