let arr = [1, -2, 2, 7, 26, 29, -1, -12, -21, -8, 10, 15, 25, -100, 100]

selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin] ) {
                indexMin = j
            }
        }
        let temporary = array[i]
        array[i] = array[indexMin]
        array[indexMin] = temporary
    }
    return array
}

console.log(selectionSort(arr));