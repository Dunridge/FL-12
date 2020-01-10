/*global date_string_p1*/

function convert(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            args[i] = parseInt(args[i])
        } else if (typeof args[i] === 'number') {
            args[i] = String(args[i])
        }
    }
    console.log(args)
    return args
}

function executeforEach(arr, input_func) {
    for (let i = 0; i < arr.length; i++) {
        input_func(arr[i])
    }
}

function mapArray(arr, input_func) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            arr[i] = parseInt(arr[i])
        }

        arr[i] = input_func(arr[i])
    }

    return arr
}

function filterArray(arr, input_func) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (input_func(arr[i])) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

function flipOver(input_word) {
    for (let i = 0; i < input_word.length; i++) {
        let tmp_value = input_word[i]
        input_word[i] = input_word[input_word.length - i]
        input_word[input_word.length - i] = tmp_value
    }

    return input_word
}

function makeListFromRange(arr) {
    let new_arr = []
    for (let i = arr[0]; i <= arr[1]; i++) {
        new_arr.push(i)
    }

    return new_arr
}

function getArrayOfKeys(arr, key_name) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i][key_name])
    }
}

function substitute(arr) {
    let less_than = 30
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < less_than) {
            arr[i] = '*'
        }
    }

    return arr
}

function getPastDay(current_date, days_back) {
    current_date.setDate(current_date.getDate() - days_back)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let answer_date = current_date.getDate() + ' ' + months[current_date.getMonth()] + ' ' + current_date.getFullYear()
    console.log(answer_date)
    return current_date
}

function formatDate(current_date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (!current_date) {
        let date_string_p1 = new Date().getFullYear() + ' ' + months[current_date.getMonth()] + ' '
        let date_string_p2 = new Date().getDate()
        let date_strint_p3 = new Date().getHours() + ':' + new Date().getMinutes()
        let final_date = date_string_p1 + date_string_p2 + date_strint_p3
        return final_date
    }

    let second_date_string_p1 = current_date.getFullYear() + '/' + (current_date.getMonth() + 1)
    let second_date_string_p2 = '/' + current_date.getDate()
    let second_date_string_p3 = ' ' + current_date.getHours() + ':' + current_date.getMinutes()
    let answer = second_date_string_p1 + second_date_string_p2 + second_date_string_p3
    return answer
}