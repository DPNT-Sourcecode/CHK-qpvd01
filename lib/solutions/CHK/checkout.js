'use strict';

const priceTable = {
    'A': { price: 50, offers: [{ quantity: 5, specialPrice: 200 }, { quantity: 3, specialPrice: 130 }] },
    'B': { price: 30, offers: [{ quantity: 2, specialPrice: 45 }] },
    'C': { price: 20, offers: [] },
    'D': { price: 15, offers: [] },
    'E': { price: 40, offers: [], bFreeWith2E: true }, // Special rule for E (buy 2E get B free)
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

    // Special offer: 2E gets 1B free, adjust B count if applicable
    if (itemCount['E'] && itemCount['E'] >= 2) {
        const freeBCount = Math.floor(itemCount['E'] / 2);
        itemCount['B'] = Math.max(0, itemCount['B'] - freeBCount); // Deduct free Bs
    }


    // Calculate total price
    let totalPrice = 0;

    for (let item in itemCount) {
        const count = itemCount[item];
        const { price, offers } = priceTable[item];

        if (offers.length > 0) {
            let remainingCount = count;
            // Sort offers by quantity descending to prioritize larger offers first
            offers.sort((a, b) => b.quantity - a.quantity);

            for (const offer of offers) {
                const offerSets = Math.floor(remainingCount / offer.quantity);
                remainingCount = remainingCount % offer.quantity;
                totalPrice += offerSets * offer.specialPrice;
            }
            totalPrice += remainingCount * price; // Add remaining items without an offer
        } else {
            // No offers, just multiply by item price
            totalPrice += count * price;
        }
    }

    return totalPrice;
};

