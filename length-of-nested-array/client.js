const getLength = (arr) => {
    return arr.flat(Infinity).length
}

console.log(getLength([1, [2, 3]]))