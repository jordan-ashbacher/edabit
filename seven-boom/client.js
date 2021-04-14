function sevenBoom(array) {
    const sevenArray = array.filter(function (num) {
        return num.toString().indexOf('7') > -1
    })

    if (sevenArray.length > 0) {
        return 'Boom!'
    } else {
        return "there is no 7 in the array"
    }
}

console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))