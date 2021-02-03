my_arr = [1, 3, 5, 7, 9]

//binary search: log(2)n steps. Sorted

let binary_search = (arr, item) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = arr[mid]

        if (guess === item) return mid

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
        return null
    }
}