import { describe, it, expect } from 'vitest'
import { createStack } from "../data-structures/stack"

describe('Create Stack', () => {

    it('should have a quantity property with the value of 0', () => {
        expect(createStack().quantity).toBe(0)
    })

    it('should have a storage property which is an empty object', () => {
        expect(createStack().storage).toEqual({})
    })

    it('should have a max size property which is the same as whats passed to the function or uses a default value of 5', () => {
        expect(createStack().maxSize).toBe(5)
        expect(createStack(8).maxSize).toBe(8)
    })

    it('should add 1 item to the storage object when calling the push method once', () => {
        const testStack = createStack()
        testStack.push('apple')
        expect(testStack.storage).toEqual({ 1: 'apple' })
    })

    it('should add an item to the storage object when calling the push method', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' })
    })

    it('should not add an item to the storage object if it is full', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        testStack.push('banana')
        testStack.push('pear')
        testStack.push('mango')
        testStack.push('pineapple')
        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange', 3: 'banana', 4: 'pear', 5: 'mango' })
    })

    it('should remove the last item from the stack if it isnt empty', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        expect(testStack.pop()).toBe('orange')
        expect(testStack.storage).toEqual({ 1: 'apple' })
    })

    it('should return undefined if the stack storage is empty', () => {
        const testStack = createStack()
        expect(testStack.pop()).toBe(undefined)
        expect(testStack.storage).toEqual({})
        expect(testStack.quantity).toBe(0)
    })

    it('should return true if the stack is empty ', () => {
        const testStack = createStack()
        expect(testStack.isEmpty()).toBe(true)
    })

    it('should return false if the stack is not empty ', () => {
        const testStack = createStack()
        testStack.push('apple')
        expect(testStack.isEmpty()).toBe(false)
    })

    it('should return true if the stack is full ', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        testStack.push('banana')
        testStack.push('pear')
        testStack.push('mango')
        expect(testStack.isFull()).toBe(true)
    })

    it('should return false if the stack is not full ', () => {
        const testStack = createStack()
        testStack.push('apple')
        expect(testStack.isFull()).toBe(false)
    })

    it('should show the item at the top of the stack storage', () => {
        const testStack = createStack()
        testStack.push('apple')
        testStack.push('orange')
        expect(testStack.peek()).toBe('orange')
        expect(testStack.storage).toEqual({ 1: 'apple', 2: 'orange' })
    })

    it('should return undefined if the stack storage is empty', () => {
        const testStack = createStack()
        expect(testStack.peek()).toBe(undefined)
    })

})