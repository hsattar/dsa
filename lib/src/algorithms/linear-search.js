"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const linearSearch = (array, searchValue) => {
    let matchFound = false;
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            matchFound = true;
            index = i;
            break;
        }
    }
    return { matchFound, index };
};
exports.linearSearch = linearSearch;
//# sourceMappingURL=linear-search.js.map