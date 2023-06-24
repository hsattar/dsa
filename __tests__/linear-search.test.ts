import { describe, it, expect } from 'vitest'
import { linearSearch } from "../algorithms/linear-search"


describe('Linear Search', () => {

    it('SHOULD RETURN AN OBJECT WITH A MATCH FOUND AND INDEX PROPERTY', () => {
        const input = [5, 9, 3, 1, 2, 8, 4, 7, 6]
        const searchValue = 5
        const result = linearSearch(input, searchValue)
        expect(result).toHaveProperty('matchFound', expect.any(Boolean))
        expect(result).toHaveProperty('index', expect.any(Number))
    })

    it('SHOULD NOT MODIFY THE ORIGINAL INPUT', () => {
      const input = [5, 9, 3, 1, 2, 8, 4, 7, 6]
      const inputCopy = [5, 9, 3, 1, 2, 8, 4, 7, 6]
      const searchValue = 5
      linearSearch(input, searchValue)
      expect(input).toEqual(inputCopy)
    })

    it('SHOULD RETURN AN OBJECT WITH THE MATCH FOUND PROPERTY SET TO FALSE AND THE INDEX SET TO -1 IT CANT FIND THE SEARCH VALUE', () => {
        const input = [2, 1, 5]
        const searchValue = 9
        const expectedOutput = { matchFound: false, index: -1 }
        const result = linearSearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN AN OBJECT WITH THE MATCH FOUND PROPERTY SET TO TRUE AND THE INDEX OF THE VALUE FOUND IF IT FINDS THE SEARCH VALUE IN A SMALL ARRAY', () => {
        const input = [2, 1, 5]
        const searchValue = 5
        const expectedOutput = { matchFound: true, index: 2 }
        const result = linearSearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN AN OBJECT WITH THE MATCH FOUND PROPERTY SET TO TRUE AND THE INDEX OF THE VALUE FOUND IF IT FINDS THE SEARCH VALUE IN A SLIGHTLY LARGER ARRAY', () => {
        const input = [5, 9, 3, 1, 2, 8, 4, 7, 6]
        const searchValue = 8
        const expectedOutput = { matchFound: true, index: 5 }
        const result = linearSearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

    it('SHOULD RETURN AN OBJECT WITH THE MATCH FOUND PROPERTY SET TO TRUE AND THE INDEX OF THE VALUE FOUND IF IT FINDS THE SEARCH VALUE IN A LARGE ARRAY', () => {
        const input = [87, 19, 11, 32, 66, 74, 53, 7, 36, 81, 100, 26, 65, 25, 37, 68, 27, 50, 59, 85, 93, 41, 98, 29, 38, 96, 4, 43, 82, 64, 79, 70, 2, 17, 58, 1, 61, 10, 95, 77, 80, 23, 34, 91, 99, 24, 22, 45, 76, 92, 84, 62, 6, 12, 75, 48, 55, 88, 90, 3, 16, 9, 97, 33, 31, 56, 72, 42, 21, 57, 15, 83, 39, 54, 67, 8, 94, 28, 18, 69, 78, 49, 86, 47, 30, 13, 73, 60, 5, 20, 89, 14, 40, 46, 51, 63, 71, 35, 52, 44]
        const searchValue = 71
        const expectedOutput = { matchFound: true, index: 96 }
        const result = linearSearch(input, searchValue)
        expect(result).toEqual(expectedOutput)
    })

})