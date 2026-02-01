// let age = prompt("Enter tour age?")
// age = Number.parseInt(age)
// const canDrive = (age) => {
//     return age >= 18 ? true : false
// }

// if (canDrive(age)) {
//     alert("You can drive")
// } else {
//     alert("You can't drive")
// }

//named function 
function additon(x, y) {
    sum = x + y
    console.log("The sum of x and y is ", sum)

}
additon(5, 10)

//anonymous function
const sub = function(x, y) {
    difference = x - y
    console.log("The difference of x and y is ", difference)
}
sub(10, 5)

//arrow function
const multiply = (x, y) => {
    product = x * y
    console.log("The product of x and y is ", product)
}
multiply(5, 10)

// beauty of arrow function when there is single line of code inside the function body we can remove the curly braces and return keyword
const divide = (x, y) => x / y
console.log("The division of x and y is ", divide(10, 5))

// one more example of arrow function
const greet = name => `Hello, ${name}! Welcome aboard.`
console.log(greet("Abhinav"))

//call back hell in js

function getCandiees(callback) {
    setTimeout(() => {
        let candies = ['chocolate', 'lollipop', 'gummy bears'];
        callback(candies);
    }, 2000);
}

getCandiees((candies) => {
    console.log("Candies fetched:", candies);
});