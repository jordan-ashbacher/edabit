const longest7SegmentWord = (words) => {
    const letters = ['k', 'm', 'v', 'w', 'x']

    const longestWords = words.filter(word => !letters.some(letter => word.includes(letter)))

    let longest = longestWords.sort((a, b) => b.length - a.length)

    if (longest.length < 1) {
        return ''
    } else {
        return longest[0]
    }
}

longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])