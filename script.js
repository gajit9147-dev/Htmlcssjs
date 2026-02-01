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