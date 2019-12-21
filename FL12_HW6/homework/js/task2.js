// Your code goes here

/*
Task 2. Identify triangle type.
	App workflow:
1.	User input 3 numbers (a, b, c) for triangle sides length.
2.	Check type of inputs. If type of inputs ( a OR b OR c ) is: empty string, undefined -  show modal window with message ( input values should be ONLY numbers )
3.	Check values of input values. If one of the value ( a OR b OR c ) equal to 0 - show modal window with message ( A triangle must have 3 sides with a positive definite length )
4.	Check such triangle can exist. If it can’t exit show modal window with message -  ‘Triangle doesn’t exist’.
5.	If triangle exist check its type: 
●	equivalent (every side is equal)
●	isosceles (two sides are equal) 
●	scalene (no sides are equal)
6.	Use console.log to show result, variants:

-	If such triangle can’t exist: ‘Triangle doesn’t exist’
-	If triangle has three equal sides: ‘Equilateral triangle’
-	If triangle has two equal sides, third differs: ‘Isosceles triangle’
-	If triangle has three different sides: ‘Scalene triangle’

*/

// −	Use prompt for handle user input and alert for error message.

//TODO: make the programme ask for input until it's given a correct one 

var a = prompt("Please, enter the length of the a side of the triangle: ")
var b = prompt("Please, enter the length of the b side of the triangle: ")
var c = prompt("Please, enter the length of the c side of the triangle: ")

if (a == null && a == '' || b == null && b == '' || c == null && c == '') {
    alert("Input values should be ONLY numbers")
}

if (a == 0 || b == 0 || c == 0) {
    alert("A triangle must have 3 sides with a positive definite length")
}

if (!(c + b > a || a + c > b || a + b > c)) {
    alert("Triangle doesn’t exist")
} else if (a == b && a == c && b == c) {
    console.log("Equilateral triangle")
} else if (a == b && a == c && b == c || a == b && a != c && b == c || a != b && a == c && b == c) { //проблема тут: everything works except this part 
    console.log("Isosceles triangle")
} else if (a != b && a != c && b != c) {
    console.log("Scalene triangle")
}

/*
-	If such triangle can’t exist: ‘Triangle doesn’t exist’
-	If triangle has three equal sides: ‘Equilateral triangle’
-	If triangle has two equal sides, third differs: ‘Isosceles triangle’
-	If triangle has three different sides: ‘Scalene triangle’
*/