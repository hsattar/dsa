export const insertionSort = (array: number[]): number[] => {
    
    const sortedArray: number[] = [array[0]]

    for (let i = 1; i < array.length; i++) {
        
        let indexToInsert = i + 1

        for (let j = sortedArray.length - 1; j >= 0; j--) {

            indexToInsert--

            if (array[i] < sortedArray[j]) {
                if (j === 0) {
                    sortedArray.unshift(array[i])
                }
            } else {
                sortedArray.splice(indexToInsert, 0, array[i])
                break
            }

        }
        
    }

    return sortedArray
}