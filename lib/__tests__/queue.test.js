"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const queue_1 = require("../src/data-structures/queue");
(0, vitest_1.describe)('Create Queue', () => {
    (0, vitest_1.it)('should have a maxsize property with same vale that is passed into the function', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        (0, vitest_1.expect)(testQueue.maxSize).toBe(5);
    });
    (0, vitest_1.it)('should have a front and back property', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        (0, vitest_1.expect)(testQueue.hasOwnProperty('front')).toBe(true);
        (0, vitest_1.expect)(testQueue.hasOwnProperty('back')).toBe(true);
    });
    (0, vitest_1.it)('should have a storage property which defaults to an empty object', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        (0, vitest_1.expect)(testQueue.storage).toEqual({});
    });
    (0, vitest_1.it)('should add an item to the storage object and update the back property', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        testQueue.enQueue('apple');
        (0, vitest_1.expect)(testQueue.front).toBe(1);
        (0, vitest_1.expect)(testQueue.quantity).toBe(1);
        (0, vitest_1.expect)(testQueue.back).toBe(1);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 1: 'apple' });
    });
    (0, vitest_1.it)('should add more than one item to the storage object and update all properties accordingly', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        (0, vitest_1.expect)(testQueue.front).toBe(1);
        (0, vitest_1.expect)(testQueue.quantity).toBe(2);
        (0, vitest_1.expect)(testQueue.back).toBe(2);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 1: 'apple', 2: 'orange' });
    });
    (0, vitest_1.it)('shouldnt add items if the max size is reached', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        testQueue.enQueue('banana');
        testQueue.enQueue('pear');
        (0, vitest_1.expect)(testQueue.front).toBe(1);
        (0, vitest_1.expect)(testQueue.quantity).toBe(3);
        (0, vitest_1.expect)(testQueue.back).toBe(3);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 1: 'apple', 2: 'orange', 3: 'banana' });
    });
    (0, vitest_1.it)('should remove the item from the front of the queue', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        testQueue.enQueue('pear');
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.quantity).toBe(2);
        (0, vitest_1.expect)(testQueue.front).toBe(2);
        (0, vitest_1.expect)(testQueue.back).toBe(3);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 2: 'orange', 3: 'pear' });
    });
    (0, vitest_1.it)('should remove the item from the front of the queue, multiple times', () => {
        const testQueue = (0, queue_1.createQueue)(5);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        testQueue.enQueue('banana');
        testQueue.enQueue('pear');
        testQueue.enQueue('mango');
        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.quantity).toBe(1);
        (0, vitest_1.expect)(testQueue.front).toBe(5);
        (0, vitest_1.expect)(testQueue.back).toBe(5);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 5: 'mango' });
    });
    (0, vitest_1.it)('should remove all the items from the queue and update the front and back property', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        testQueue.deQueue();
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.quantity).toBe(0);
        (0, vitest_1.expect)(testQueue.front).toBe(0);
        (0, vitest_1.expect)(testQueue.back).toBe(0);
        (0, vitest_1.expect)(testQueue.storage).toEqual({});
    });
    (0, vitest_1.it)('should return undefined if it tries to remove an item when the queue is empty', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        (0, vitest_1.expect)(testQueue.deQueue()).toBe(undefined);
        (0, vitest_1.expect)(testQueue.quantity).toBe(0);
        (0, vitest_1.expect)(testQueue.front).toBe(0);
        (0, vitest_1.expect)(testQueue.back).toBe(0);
    });
    (0, vitest_1.it)('should return undefined if it tries to remove an item when the queue is empty after adding an item first', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('orange');
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.deQueue()).toBe(undefined);
        (0, vitest_1.expect)(testQueue.quantity).toBe(0);
        (0, vitest_1.expect)(testQueue.front).toBe(0);
        (0, vitest_1.expect)(testQueue.back).toBe(0);
    });
    (0, vitest_1.it)('should return the quantity of items in the queue', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        (0, vitest_1.expect)(testQueue.getQuantity()).toBe(2);
    });
    (0, vitest_1.it)('should return true or false depending on if the queue is empty', () => {
        const testQueue = (0, queue_1.createQueue)(3);
        testQueue.enQueue('apple');
        (0, vitest_1.expect)(testQueue.isEmpty()).toBe(false);
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.isEmpty()).toBe(true);
    });
    (0, vitest_1.it)('should return true or false depending on if the queue is full', () => {
        const testQueue = (0, queue_1.createQueue)(2);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        (0, vitest_1.expect)(testQueue.isFull()).toBe(true);
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.isFull()).toBe(false);
    });
    (0, vitest_1.it)('should reveal the item at the front of the queue without removing it', () => {
        const testQueue = (0, queue_1.createQueue)(2);
        testQueue.enQueue('apple');
        testQueue.enQueue('orange');
        testQueue.deQueue();
        (0, vitest_1.expect)(testQueue.peek()).toBe('orange');
        (0, vitest_1.expect)(testQueue.front).toBe(2);
        (0, vitest_1.expect)(testQueue.back).toBe(2);
        (0, vitest_1.expect)(testQueue.storage).toEqual({ 2: 'orange' });
    });
});
//# sourceMappingURL=queue.test.js.map