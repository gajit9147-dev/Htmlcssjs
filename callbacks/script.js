//Synchronous (sync)  Runs line by line. Next line waits for the previous one to finish.

console.log("1");

function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log("3");


//Asynchronous (async)Does not wait. It schedules work (timer/network) and continues.
console.log("A");

setTimeout(() => {
    console.log("B (after 2 sec)");
}, 2000);

console.log("C");

// callback function  A callback function is a function you pass into another function, and it gets called later (or when some work is done).

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

greet("Ajeet", function() {
    console.log("Welcome!");
});