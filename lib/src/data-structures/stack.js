"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStack = void 0;
function createStack(maxSize = 5) {
    let quantityCount = 0;
    const myStack = {
        quantity: quantityCount,
        storage: {},
        maxSize: maxSize,
        push: addItem,
        pop: removeItem,
        isEmpty: checkIfStorageEmpty,
        isFull: checkIfStorageFull,
        peek: checkLastItem,
    };
    return myStack;
}
exports.createStack = createStack;
function addItem(item) {
    if (this.quantity < this.maxSize) {
        this.quantity++;
        this.storage = Object.assign(Object.assign({}, this.storage), { [this.quantity]: item });
    }
}
function removeItem() {
    if (this.quantity > 0) {
        const lastItem = this.storage[this.quantity];
        delete this.storage[this.quantity];
        this.quantity--;
        return lastItem;
    }
}
function checkIfStorageEmpty() {
    return this.quantity === 0;
}
function checkIfStorageFull() {
    return this.quantity === this.maxSize;
}
function checkLastItem() {
    if (this.quantity > 0) {
        return this.storage[this.quantity];
    }
}
//# sourceMappingURL=stack.js.map