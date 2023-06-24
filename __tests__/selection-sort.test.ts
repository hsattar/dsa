import { describe, it, expect } from 'vitest'
import { selectionSort } from "../algorithms/selection-sort"


describe('Selection Sort', () => {

    it('SHOULD RETURN AN ARRAY OF THE SAME LENGTH', () => {
        const input = [2, 1, 3]
        const result = selectionSort(input)
        expect(result.length).toBe(3)
    })

    it('SHOULD NOT MODIFY THE ORIGINAL INPUT', () => {
      const input = [2, 1, 3]
      const inputCopy = [2, 1, 3]
      selectionSort(input)
      expect(input).toEqual(inputCopy)
    })

    it('SHOULD RETURN A SORTED ARRAY WHEN PASSED 2 NUMBERS IN REVERSE ORDER', () => {
        const input = [2, 1]
        const expectedOutput = [1, 2]
        const result = selectionSort(input)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN A SORTED ARRAY WHEN PASSED MULTIPLE NUMBERS IN RANDOM ORDER', () => {
        const input = [5, 9, 3, 1, 2, 8, 4, 7, 6]
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const result = selectionSort(input)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN A SORTED ARRAY WHEN PASSED A LARGE NUMBERS ARRAY IN RANDOM ORDER', () => {
        const input = [87, 19, 11, 32, 66, 74, 53, 7, 36, 81, 100, 26, 65, 25, 37, 68, 27, 50, 59, 85, 93, 41, 98, 29, 38, 96, 4, 43, 82, 64, 79, 70, 2, 17, 58, 1, 61, 10, 95, 77, 80, 23, 34, 91, 99, 24, 22, 45, 76, 92, 84, 62, 6, 12, 75, 48, 55, 88, 90, 3, 16, 9, 97, 33, 31, 56, 72, 42, 21, 57, 15, 83, 39, 54, 67, 8, 94, 28, 18, 69, 78, 49, 86, 47, 30, 13, 73, 60, 5, 20, 89, 14, 40, 46, 51, 63, 71, 35, 52, 44]
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        const result = selectionSort(input)
        expect(result).toEqual(expectedOutput)
    })

})