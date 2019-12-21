// Your code goes here

/*
RESTRICTIONS
−	No requirements for browser support (should correct work in Google Chrome last version).
−	Use prompt for handle user input and alert for error message.
−	JS functions are forbidden

Task 1. Implement app for solve Quadratic equation.
	App workflow:
1.	User input 3 values (a, b, c) for quadratic equation (ax2 + bx + c = 0).
2.	If input data not valid show message in console (‘Invalid input data’). 
3.	If possible, find Discriminant.
4.	Use console.log to show result, variants:
-	x = 0;
-	x1 = ‘value1’ and x2 = ‘value2’;
-	no solution (when Discriminant < 0);

*/

// −	Use prompt for handle user input and alert for error message.

/*
Example of checking whether a variable is of certain type: 
if(typeof(x) === 'string') {
    alert('x is a string')
  } else if(typeof(x) === 'number') {
    alert('x is a number')
  }
*/

var a = prompt("Please, enter the a coeficient of the quadratic equation: ")
var b = prompt("Please, enter the b coeficient of the quadratic equation: ")
var c = prompt("Please, enter the c coeficient of the quadratic equation: ")

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Invalid input data") //this works 
}

if (b ** 2 - 4 * a * c >= 0) {
    var D = b ** 2 - 4 * a * c
    if (D = 0) {
        var x = -b / 2 * a
        console.log("x: ", x)
    }
    if (D > 0) { //something's wrong here
        var x1 = (-b + Math.sqrt(D)) / 2 * a
        var x2 = (-b - Math.sqrt(D)) / 2 * a
        console.log("x1: ", x1)
        console.log("x2: ", x2)
    }
} else {
    console.log("no solution")
}