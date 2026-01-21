let age = prompt("Enter tour age?")
age = Number.parseInt(age)
const canDrive = (age) => {
    return age >= 18 ? true : false
}

if (canDrive(age)) {
    alert("You can drive")
} else {
    alert("You can't drive")
}