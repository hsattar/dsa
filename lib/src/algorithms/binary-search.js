"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const binarySearch = (array, searchValue) => {
    if (array.length === 0)
        return false;
    let matchFound = false;
    const middleIndex = array.length % 2 === 0 ? array.length / 2 : Math.floor(array.length / 2);
    const middleValue = array[middleIndex];
    if (middleValue === searchValue) {
        return true;
    }
    else if (middleValue < searchValue) {
        return (0, exports.binarySearch)(array.slice(middleIndex + 1, array.length), searchValue);
    }
    else if (middleValue > searchValue) {
        return (0, exports.binarySearch)(array.slice(0, middleIndex), searchValue);
    }
    return matchFound;
};
exports.binarySearch = binarySearch;
//# sourceMappingURL=binary-search.js.map