function makeNumber(inputString) {
    if (Array.from(inputString).every(elem => {
            return isNaN(elem);
        })) {
        return '';
    }
    return Array.from(inputString).filter(function(elem) {
        if (!isNaN(elem)) {
            return elem;
        }
        return 0
    }).reduce(function(prev, curr) {
        return prev.concat(curr);
    });
}


alert(makeNumber('ijifjgdj'))