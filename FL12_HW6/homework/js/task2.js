let a = prompt('Please, enter the length of the a side of the triangle: ')
let b = prompt('Please, enter the length of the b side of the triangle: ')
let c = prompt('Please, enter the length of the c side of the triangle: ')

if (a === null && a === '' || b === null && b === '' || c === null && c === '') {
    alert('Input values should be ONLY numbers')
}

if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length')
}

if (!(c + b > a || a + c > b || a + b > c)) {
    alert('Triangle doesn’t exist')
} else if (a === b && a === c && b === c) {
    console.log('Equilateral triangle')
} else if (a === b && a === c && b === c || a === b && a !== c && b === c || a !== b && a === c && b === c) {
    console.log('Isosceles triangle')
} else if (a !== b && a !== c && b !== c) {
    console.log('Scalene triangle')
}