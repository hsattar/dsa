"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const stack_1 = require("../src/data-structures/stack");
(0, vitest_1.describe)('Create Stack', () => {
    (0, vitest_1.it)('should have a quantity property with the value of 0', () => {
        (0, vitest_1.expect)((0, stack_1.createStack)().quantity).toBe(0);
    });
    (0, vitest_1.it)('should have a storage property which is an empty object', () => {
        (0, vitest_1.expect)((0, stack_1.createStack)().storage).toEqual({});
    });
    (0, vitest_1.it)('should have a max size property which is the same as whats passed to the function or uses a default value of 5', () => {
        (0, vitest_1.expect)((0, stack_1.createStack)().maxSize).toBe(5);
        (0, vitest_1.expect)((0, stack_1.createStack)(8).maxSize).toBe(8);
    });
    (0, vitest_1.it)('should add 1 item to the storage object when calling the push method once', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        (0, vitest_1.expect)(testStack.storage).toEqual({ 1: 'apple' });
    });
    (0, vitest_1.it)('should add an item to the storage object when calling the push method', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        testStack.push('orange');
        (0, vitest_1.expect)(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' });
    });
    (0, vitest_1.it)('should not add an item to the storage object if it is full', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        testStack.push('orange');
        testStack.push('banana');
        testStack.push('pear');
        testStack.push('mango');
        testStack.push('pineapple');
        (0, vitest_1.expect)(testStack.storage).toEqual({ 1: 'apple', 2: 'orange', 3: 'banana', 4: 'pear', 5: 'mango' });
    });
    (0, vitest_1.it)('should remove the last item from the stack if it isnt empty', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        testStack.push('orange');
        (0, vitest_1.expect)(testStack.pop()).toBe('orange');
        (0, vitest_1.expect)(testStack.storage).toEqual({ 1: 'apple' });
    });
    (0, vitest_1.it)('should return undefined if the stack storage is empty', () => {
        const testStack = (0, stack_1.createStack)();
        (0, vitest_1.expect)(testStack.pop()).toBe(undefined);
        (0, vitest_1.expect)(testStack.storage).toEqual({});
        (0, vitest_1.expect)(testStack.quantity).toBe(0);
    });
    (0, vitest_1.it)('should return true if the stack is empty ', () => {
        const testStack = (0, stack_1.createStack)();
        (0, vitest_1.expect)(testStack.isEmpty()).toBe(true);
    });
    (0, vitest_1.it)('should return false if the stack is not empty ', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        (0, vitest_1.expect)(testStack.isEmpty()).toBe(false);
    });
    (0, vitest_1.it)('should return true if the stack is full ', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        testStack.push('orange');
        testStack.push('banana');
        testStack.push('pear');
        testStack.push('mango');
        (0, vitest_1.expect)(testStack.isFull()).toBe(true);
    });
    (0, vitest_1.it)('should return false if the stack is not full ', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        (0, vitest_1.expect)(testStack.isFull()).toBe(false);
    });
    (0, vitest_1.it)('should show the item at the top of the stack storage', () => {
        const testStack = (0, stack_1.createStack)();
        testStack.push('apple');
        testStack.push('orange');
        (0, vitest_1.expect)(testStack.peek()).toBe('orange');
        (0, vitest_1.expect)(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' });
    });
    (0, vitest_1.it)('should return undefined if the stack storage is empty', () => {
        const testStack = (0, stack_1.createStack)();
        (0, vitest_1.expect)(testStack.peek()).toBe(undefined);
    });
});
//# sourceMappingURL=stack.test.js.map