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
                // Handle special offer for E (2E get one B free)
                const offerSet = Math.floor(count / 2);
                const remainingItems = count % 2;

                totalPrice = totalPrice + (offerSet * 2 * price + remainingItems * price);


                // Decrease the count of B as free items if available
                if (itemCount['B']) {
                    itemCount['B'] = Math.max(0, itemCount['B'] - offerSet);
                }

            } else {
                // Handle multi-tier offers like A and B
                for (const offer of offers) {
                    const offerSets = Math.floor(count / offer.quantity);
                    const remainingItems = count % offer.quantity;
                    totalPrice = totalPrice + (offerSets * offer.specialPrice + remainingItems * price);
                    break; // Prioritize the best deal
                }
            }

        } else {
            totalPrice = totalPrice + (count * price);
        }

    }

    return totalPrice;

};



