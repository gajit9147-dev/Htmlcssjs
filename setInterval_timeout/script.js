// document.writeln(" i am fine")

// setTimeout(function() {
//     alert("I am good and you")
// }, 3000)

// setTimeout() (run once after delay)

// Definition: Runs a function one time after given milliseconds.

// setTimeout(() => {
//     console.log("Runs after 2 seconds");
// }, 2000);

// setInterval() (run again and again)

// Definition: Runs a function repeatedly every given milliseconds.

// let id = setInterval(() => {
//     console.log("Runs every 1 second");
// }, 1000);


let count = 5;

let timer = setInterval(() => {
    console.log(count);

    if (count === 0) {
        clearInterval(timer);
        console.log("Done!");
    }

    count--;
}, 1000);