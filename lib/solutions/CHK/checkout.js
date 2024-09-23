'use strict';

function checkout(itemsString) {
    const items = itemsString.split(',');
    let totalPrice = 0;
    const itemCounts = new Map();

    for (const item of items) {
        if (!['A', 'B', 'C', 'D', 'E'].includes(item)) {
            return -1; // Invalid item
        }

        itemCounts.set(item, (itemCounts.get(item) || 0) + 1);

        switch (item) {
            case 'A':
                if (itemCounts.get('A') >= 3) {
                    totalPrice += 130;
                    itemCounts.set('A', itemCounts.get('A') - 3);
                } else {
                    totalPrice += 50;
                }
                break;
            case 'B':
                if (itemCounts.get('B') >= 2) {
                    totalPrice += 45;
                    itemCounts.set('B', itemCounts.get('B') - 2);
                } else {
                    totalPrice += 30;
                }
                break;
            case 'C':
                totalPrice += 20;
                break;
            case 'D':
                totalPrice += 15;
                break;
            case 'E':
                totalPrice += 40;
                if (itemCounts.get('E') >= 2) {
                    itemCounts.set('E', itemCounts.get('E') - 2);
                    // The issue was here: you were adding B to the count instead of subtracting
                    itemCounts.set('B', (itemCounts.get('B') || 0) - 1);
                }
                break;
            default:
                break;
        }
    }

    return totalPrice;
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    checkout(skus);
};



