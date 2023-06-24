import { describe, it, expect } from 'vitest'
import { bubbleSort } from "../algorithms/bubble-sort"


describe('Bubble Sort', () => {

    it('SHOULD RETURN AN ARRAY OF THE SAME LENGTH', () => {
        const input = [2, 1, 3]
        const result = bubbleSort(input)
        expect(result.length).toBe(3)
    })

    it('SHOULD NOT MODIFY THE ORIGINAL INPUT', () => {
      const input = [2, 1, 3]
      const inputCopy = [2, 1, 3]
      bubbleSort(input)
      expect(input).toEqual(inputCopy)
    })

    it('SHOULD RETURN A SORTED ARRAY WHEN PASSED 2 NUMBERS IN REVERSE ORDER', () => {
        const input = [2, 1]
        const expectedOutput = [1, 2]
        const result = bubbleSort(input)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN A SORTED ARRAY WHEN PASSED MULTIPLE NUMBERS IN RANDOM ORDER ORDER', () => {
        const input = [5, 9, 3, 1, 2, 8, 4, 7, 6]
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const result = bubbleSort(input)
        expect(result).toEqual(expectedOutput)
    })

})