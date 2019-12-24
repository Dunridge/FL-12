let a = prompt('Please, enter the a coeficient of the quadratic equation: ')
let b = prompt('Please, enter the b coeficient of the quadratic equation: ')
let c = prompt('Please, enter the c coeficient of the quadratic equation: ')

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data')
}

let to_power = 2
let discr_coef = 4
let divide_by = 2

let D = Math.pow(b, to_power) - discr_coef * a * c
let x = -b / divide_by * a
let x1 = (-b + Math.sqrt(D)) / divide_by * a
let x2 = (-b - Math.sqrt(D)) / divide_by * a

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