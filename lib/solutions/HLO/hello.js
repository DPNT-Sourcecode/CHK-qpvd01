'use strict';

const inputValidation = (friendName) => {
    if (typeof friendName!=='string' || friendName.length === 0) {
        throw new Error('Friend name must be a non-empty string');
    }
    if (friendName.length > 50) {
        throw new Error('Friend name must be less than or equal to 50 characters');
    }
}
module.exports = function (friendName) {
    inputValidation(friendName);
    return `Hello, ${friendName}!`;
};
