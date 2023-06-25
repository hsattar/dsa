"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
const selectionSort = (array) => {
    const arrayCopy = [...array];
    const sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        let lowestNumber = arrayCopy[0];
        let lowestNumberIndex = 0;
        for (let j = 0; j < arrayCopy.length; j++) {
            if (arrayCopy[j] < lowestNumber) {
                lowestNumber = arrayCopy[j];
                lowestNumberIndex = j;
            }
        }
        sortedArray.push(lowestNumber);
        arrayCopy.splice(lowestNumberIndex, 1);
    }
    return sortedArray;
};
exports.selectionSort = selectionSort;
//# sourceMappingURL=selection-sort.js.map