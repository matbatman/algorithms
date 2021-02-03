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

let multiplyArr = (arr) => {
    let newArr = []

    if (arr.length === 0) { return newArr }
    else {

        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * arr[arr.length - 1])
        }
        arr.pop()

        return multiplyArr(arr)
    }
}
console.log(multiplyArr(my_arr))