my_arr = [6, 3, 5, 1, 9]

// selection sort

let findSmallestIndex = (arr) => {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}


let selectionSort = (arr) => {
    let newArr = []
    let len = arr.length

    for (let i = 0; i < len; i++) {
        let smallest = findSmallestIndex(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    return newArr
}

//quick sort
let quickSort = (arr) => {
    if (arr.length < 2) { return arr }
    else {
        let pivot = arr[0]
        let less = []
        let greater = []
        for (let i = 1; i < arr.length; i++) {
            if (pivot < arr[i]) {
                greater.push(arr[i])
            } else {
                less.push(arr[i])
            }
        }
        return quickSort(less).concat(pivot, quickSort(greater));
    }
}