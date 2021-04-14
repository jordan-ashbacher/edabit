let msec = Date.parse("June 14, 2019")
console.log(msec)

const getDays = (date1, date2) => {
    let msec1 = Date.parse(date1)
    let msec2 = Date.parse(date2)
    
    let difference = ((msec2 - msec1) / 86400000)

    return difference
}

getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  )