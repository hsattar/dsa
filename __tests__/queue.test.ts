import { describe, it, expect } from 'vitest'
import { createQueue } from "../src/data-structures/queue"

describe('Create Queue', () => {

    it('should have a maxsize property with same vale that is passed into the function', () => {
        const testQueue = createQueue(5)
        expect(testQueue.maxSize).toBe(5)
    })

    it('should have a front and back property', () => {
        const testQueue = createQueue(5)
        expect(testQueue.hasOwnProperty('front')).toBe(true)
        expect(testQueue.hasOwnProperty('back')).toBe(true)
    })

    it('should have a storage property which defaults to an empty object', () => {
        const testQueue = createQueue(5)
        expect(testQueue.storage).toEqual({})
    })

    it('should add an item to the storage object and update the back property', () => {
        const testQueue = createQueue(5)
        testQueue.enQueue('apple')
        expect(testQueue.front).toBe(1)
        expect(testQueue.quantity).toBe(1)
        expect(testQueue.back).toBe(1)
        expect(testQueue.storage).toEqual({ 1: 'apple' })
    })

    it('should add more than one item to the storage object and update all properties accordingly', () => {
        const testQueue = createQueue(5)
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        expect(testQueue.front).toBe(1)
        expect(testQueue.quantity).toBe(2)
        expect(testQueue.back).toBe(2)
        expect(testQueue.storage).toEqual({ 1: 'apple', 2: 'orange' })
    })

    it('shouldnt add items if the max size is reached', () => {
        const testQueue = createQueue(3)
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        testQueue.enQueue('banana')
        testQueue.enQueue('pear')
        expect(testQueue.front).toBe(1)
        expect(testQueue.quantity).toBe(3)
        expect(testQueue.back).toBe(3)
        expect(testQueue.storage).toEqual({ 1: 'apple', 2: 'orange', 3: 'banana' })
    })

    it('should remove the item from the front of the queue', () => {
        const testQueue = createQueue(3)
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        testQueue.enQueue('pear')
        testQueue.deQueue()
        expect(testQueue.quantity).toBe(2)
        expect(testQueue.front).toBe(2)
        expect(testQueue.back).toBe(3)
        expect(testQueue.storage).toEqual({ 2: 'orange', 3: 'pear' })
    })

    it('should remove the item from the front of the queue, multiple times', () => {
        const testQueue = createQueue(5)
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        testQueue.enQueue('banana')
        testQueue.enQueue('pear')
        testQueue.enQueue('mango')
        testQueue.deQueue()
        testQueue.deQueue()
        testQueue.deQueue()
        testQueue.deQueue()
        expect(testQueue.quantity).toBe(1)
        expect(testQueue.front).toBe(5)
        expect(testQueue.back).toBe(5)
        expect(testQueue.storage).toEqual({ 5: 'mango' })
    })

    it('should remove all the items from the queue and update the front and back property', () => {
        const testQueue = createQueue(3)
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        testQueue.deQueue()
        testQueue.deQueue()
        expect(testQueue.quantity).toBe(0)
        expect(testQueue.front).toBe(0)
        expect(testQueue.back).toBe(0)
        expect(testQueue.storage).toEqual({})
    })

    it('should return undefined if it tries to remove an item when the queue is empty', () => {
        const testQueue = createQueue(3)        
        expect(testQueue.deQueue()).toBe(undefined)
        expect(testQueue.quantity).toBe(0)
        expect(testQueue.front).toBe(0)
        expect(testQueue.back).toBe(0)
    })

    it('should return undefined if it tries to remove an item when the queue is empty after adding an item first', () => {
        const testQueue = createQueue(3)    
        testQueue.enQueue('orange')
        testQueue.deQueue()
        expect(testQueue.deQueue()).toBe(undefined)
        expect(testQueue.quantity).toBe(0)
        expect(testQueue.front).toBe(0)
        expect(testQueue.back).toBe(0)
    })

    it('should return the quantity of items in the queue', () => {
        const testQueue = createQueue(3)    
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        expect(testQueue.getQuantity()).toBe(2)
    })

    it('should return true or false depending on if the queue is empty', () => {
        const testQueue = createQueue(3)    
        testQueue.enQueue('apple')
        expect(testQueue.isEmpty()).toBe(false)
        testQueue.deQueue()
        expect(testQueue.isEmpty()).toBe(true)
    })

    it('should return true or false depending on if the queue is full', () => {
        const testQueue = createQueue(2)    
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        expect(testQueue.isFull()).toBe(true)
        testQueue.deQueue()
        expect(testQueue.isFull()).toBe(false)
    })

    it('should reveal the item at the front of the queue without removing it', () => {
        const testQueue = createQueue(2)    
        testQueue.enQueue('apple')
        testQueue.enQueue('orange')
        testQueue.deQueue()
        expect(testQueue.peek()).toBe('orange')  
        expect(testQueue.front).toBe(2)  
        expect(testQueue.back).toBe(2)  
        expect(testQueue.storage).toEqual({ 2: 'orange' })  
    })

})