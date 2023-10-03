/*
QUESTION 1:
Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

Hint : filter, includes
Resources: Array.prototype.includes() - JavaScript | MDN

Examples:
var dogNames = ["Max","Fido","Gizmo","Nala"]
//Test Cases
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']
var testString2 = "My Dog is fast, her name is Tippi"
//Expect []
var testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']
*/


var dogNames = ["Max", "Fido", "Gizmo", "Nala"]

function searchNames(string) {
    const dogNames = ["Max", "Fido", "Gizmo", "Nala"]
    const searchNames = dogNames.filter((dogName) => string.includes(dogName))
    return searchNames
}

var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//can create variable
var result = searchNames(testString1)
console.log(result)

//or input directly through console
var testString2 = "My Dog is fast, her name is Tippi"
console.log(searchNames(testString2, dogNames))

var testString3 = "Come here Fido and Gizmo come here"
console.log(searchNames(testString3, dogNames))



/* 
QUESTION 2:
Write a function using a for loop to convert an array of numbers from inches to feet.

Example: 
var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
[ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]
*/

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]

function convertFeet(heightsInInches) {
    var feetList = []
    for (var i = 0; i < heightsInInches.length; i++) {
        var inches = heightsInInches[i]
        var feet = inches / 12
        feetList.push(feet)
    }
    return feetList
}

var feet = convertFeet(heightsInInches)
console.log(feet)



/*
QUESTION 3:
Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

Example:
var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// Expects:
[
'Leonardo is eating pizza',
'Michelangelo is eating pizza',
'Donatello is eating pizza',
'Raphael is being rude'
]
*/

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
var result = []

for (var i = 0; i < tmnt.length; i++) {
    var action = tmnt[i].endsWith("o") ? "is eating pizza" : "is being rude" //ternary operator as conditional
    result.push(tmnt[i] + " " + action)
}

console.log(result)



/*
QUESTION 4:
Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

Example:
var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125
*/

var findAMax = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]

const maxNumber = (numbers) => {
    let max = 0
    for (const number of numbers) {
        if (number > max) {
            max = number
        }
    }
    return max
}

const result = maxNumber(findAMax)
console.log(result)



/*
QUESTION 5:
Comple 3 codewars problems using JavaScript, start with ones you have already solved in python. Paste a link in your .js file to the codewar problem and your solution.
*/


// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
function multiply(a, b) {
    return a * b
}


//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}


//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers) {
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}