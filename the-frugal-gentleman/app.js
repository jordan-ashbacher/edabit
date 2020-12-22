// The Frugal Gentleman
let wines = ([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ])

const sortWine = (wine) => {
    return wine.sort((a, b) => {
        if (a.price > b.price) {
            return -1;
        } else if (a.price < b.price) {
            return 1;
        } else {
            return 0
        }
    })
}

const chosenWine = () => {
    sortWine(wines)
    if (wines.length === 0) {
        return 'null'
    } else if (wines.length === 1) {
        return wines[0].name
    } else {
        return wines[1].name
    }
    
}

console.log(chosenWine())