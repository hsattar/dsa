"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (array) => {
    const arrayCopy = [...array];
    const sortedArray = [];
    console.log(arrayCopy);
    for (let i = 0; i < array.length; i++) {
        let rightIndex = array.length - 1;
        let leftIndex = array.length - 2;
        for (let j = 0; j < array.length - 1; j++) {
            const rightNum = array[rightIndex];
            const leftNum = array[leftIndex];
            // console.log(array[leftIndex], array[rightIndex])
            if (array[rightIndex] < array[leftIndex]) {
                arrayCopy.splice(leftIndex, 2, rightNum, leftNum);
            }
            rightIndex--;
            leftIndex--;
        }
        console.log(arrayCopy);
    }
    return arrayCopy;
};
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubble-sort.js.map