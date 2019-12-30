function pipe(target_number, ...args) {
    for (let i = 0; i < args.length; i++) {
        target_number = args[i](target_number);
    }
    return target_number
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);