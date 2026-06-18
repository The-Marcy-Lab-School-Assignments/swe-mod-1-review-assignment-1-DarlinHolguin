const uniqueNames = (names) => {
    const newArr = []
    const lowerCase = []

    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        if (!lowerCase.includes(name.toLowerCase())) {
            newArr.push(name)
            lowerCase.push(name.toLowerCase())
        }
    }
    return newArr
}