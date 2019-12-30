function getMin(a, b, c) {
    if (a === b) {
        if (a === c) {
            arguments.length
        }
    }
    let minArg = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (minArg > arguments[i]) {
            minArg = arguments[i]
        }
    }
    return minArg;
}

getMin(3, 0, -3);