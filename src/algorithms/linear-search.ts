export const linearSearch = (array: number[], searchValue: number): IReturnValue => {
    let matchFound = false
    let index = -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            matchFound = true
            index = i
            break
        }
    }

    return {  matchFound, index }
}

interface IReturnValue {
    matchFound: boolean
    index: number
}