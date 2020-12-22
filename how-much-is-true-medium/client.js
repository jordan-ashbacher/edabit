function countTrue(array) {
    let totalTrues = 0
    for (let item of array) {
        if (item === true) {
            totalTrues ++
        }
    }
    return totalTrues
}

console.log(countTrue([true, false, false, true, false]))

console.log(countTrue([false, false, false, false]))

console.log(countTrue([]))