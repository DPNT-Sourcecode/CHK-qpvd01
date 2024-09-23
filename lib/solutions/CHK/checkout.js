'use strict';

const validSKUs = ['A', 'B', 'C', 'D']
const inputValidation = (skus) => {
   const invalidSkus = skus.filter(sku =>!validSKUs.includes(sku));
   return invalidSkus.length === 0;
}
//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (!inputValidation()) return -1
    

    throw new Error("method not implemented");
};

