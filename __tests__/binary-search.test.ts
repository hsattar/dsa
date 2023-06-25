import { describe, it, expect } from 'vitest'
import { binarySearch } from "../src/algorithms/binary-search"


describe('Linear Search', () => {

    it('SHOULD RETURN A BOOLEAN', () => {
        const input = [1, 2, 3, 4, 5]
        const searchValue = 5
        const result = binarySearch(input, searchValue)
        expect(typeof result).toBe('boolean')
    })

    it('SHOULD NOT MODIFY THE ORIGINAL INPUT', () => {
      const input = [1, 2, 3, 4, 5]
      const inputCopy = [1, 2, 3, 4, 5]
      const searchValue = 5
      binarySearch(input, searchValue)
      expect(input).toEqual(inputCopy)
    })

    it('SHOULD RETURN FALSE IF IT CANT FIND THE SEARCH VALUE', () => {
        const input = [1, 2, 3, 4]
        const searchValue = 9
        const expectedOutput = false
        const result = binarySearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN TRUE IF IT FINDS THE SEARCH VALUE IN A SMALL ARRAY', () => {
        const input = [1, 2, 3, 4, 5]
        const searchValue = 5
        const expectedOutput = true
        const result = binarySearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN TRUEIF IT FINDS THE SEARCH VALUE IN A SLIGHTLY LARGER ARRAY', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const searchValue = 3
        const expectedOutput = true
        const result = binarySearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN TRUE IF IT FINDS THE SEARCH VALUE IN A LARGE ARRAY', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        const searchValue = 15
        const expectedOutput = true
        const result = binarySearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

})