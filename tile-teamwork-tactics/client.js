const possibleBonus = (a, b) => {
    let difference = b - a

    if (difference > 0 && difference < 7) {
        return true
    } else {
        return false
    }
}

function possibleBonus(a, b) {
	return b - a <= 6 && b - a > 0
}