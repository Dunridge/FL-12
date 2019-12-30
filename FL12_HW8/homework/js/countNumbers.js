/*global out_frequency:writable*/

function countNumber(inputString) {
    if (Array.from(inputString).every(elem => {
            return isNaN(elem);
        })) {
        return '';
    }

    var arr = new Array(3)

    arr = Array.from(inputString).filter(function(elem) {
        if (!isNaN(elem)) {
            return elem;
        }
        return 0
    }).reduce(function(prev, curr) {
        return prev.concat(curr);
    });

    let i, len = arr.length,
        out = [],
        obj = {};
    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }

    out_frequency = new Array(out.length).fill(0)

    for (let i = 0; i < out.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (out[i] === arr[j]) {
                out_frequency[i]++;
            }
        }
    }

    for (let i = 0; i < out.length; i++) {
        alert(out[i] + " : " + out_frequency[i])
    }

}

alert(countNumber('erer384jj4444666888jfd123'))