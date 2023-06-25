"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueue = void 0;
function createQueue(maxSize) {
    let quantity = 0;
    const myQueue = {
        quantity: quantity,
        maxSize: maxSize,
        front: 0,
        back: 0,
        storage: {},
        enQueue: addToQueue,
        deQueue: removeFromQueue,
        getQuantity: getQuantity,
        isEmpty: checkIfEmpty,
        isFull: checkIfFull,
        peek: checkFirstItem
    };
    return myQueue;
}
exports.createQueue = createQueue;
function addToQueue(item) {
    if (this.quantity < this.maxSize) {
        this.quantity++;
        this.storage = Object.assign(Object.assign({}, this.storage), { [this.quantity]: item });
        this.back = this.quantity;
        this.front = 1;
    }
}
function removeFromQueue() {
    if (this.quantity > 0) {
        this.quantity--;
        delete this.storage[this.front];
        this.front++;
        if (this.quantity === 0) {
            this.front = 0;
            this.back = 0;
        }
    }
}
function getQuantity() {
    return this.quantity;
}
function checkIfEmpty() {
    return this.quantity === 0;
}
function checkIfFull() {
    return this.quantity === this.maxSize;
}
function checkFirstItem() {
    return this.storage[this.front];
}
//# sourceMappingURL=queue.js.map