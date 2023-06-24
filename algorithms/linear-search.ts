export const linearSearch = (array: number[], searchValue: number): IReturnValue => {
    let matchFound = false
    let index = -1
    return {  matchFound, index }
}

interface IReturnValue {
    matchFound: boolean
    index: number
}