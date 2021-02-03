my_arr = [6, 3, 5, 1, 9]

let sum = (arr) => {
    let s = 0 + arr[arr.length - 1]
    arr.pop()

    if (arr.length === 0) { return s }
    else {
        return s + sum(arr)
    }
}

let quantity = (arr) => {
    let q = 0 + 1
    arr.pop()

    if (arr.length === 0) { return q }
    else {
        return q + quantity(arr)
    }
}