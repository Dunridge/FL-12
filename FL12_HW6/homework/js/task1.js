let a = prompt('Please, enter the a coeficient of the quadratic equation: ')
let b = prompt('Please, enter the b coeficient of the quadratic equation: ')
let c = prompt('Please, enter the c coeficient of the quadratic equation: ')

let raise_to_power = 2
let discrim_coef = 4
let div_by_two = 2

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data')
}

let D = Math.pow(b, raise_to_power) - discrim_coef * a * c
let x = -b / div_by_two * a
let x1 = (-b + Math.sqrt(D)) / div_by_two * a
let x2 = (-b - Math.sqrt(D)) / div_by_two * a

if (D >= 0) {
    if (D === 0) {
        console.log('x: ', x)
    }
    if (D > 0) {
        console.log('x1: ', x1)
        console.log('x2: ', x2)
    }
} else {
    console.log('no solution')
}