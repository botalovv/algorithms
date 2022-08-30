let arr = [1, -2, 2, 7, 26, 29, -1, -12, -21, -8, 10, 15, 25, -100, 100, 51, 421, 27, -124, 55]

bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temporary = array[i];
                array[i] = array[j];
                array[j] = temporary;
            }

        }

    }
    return array
}

console.log(bubbleSort(arr))