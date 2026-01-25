// promisse use for parllel excution
//In JavaScript, a Promise is used for asynchronous work (like API calls, timers). It has 3 states:

// pending (waiting)

// fulfilled (success → resolve)

// rejected (failed → reject)

//Simple Promise
let p = new Promise((resolve, reject) => {
    let success = true;

    if (success) resolve("Done ✅");
    else reject("Error ❌");
});

p.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

//Promise with setTimeout (async

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data after 2 sec");
        }, 2000);
    });
}

getData().then((data) => console.log(data));

// Using async/await (clean way)

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 1000);
    });
}

async function run() {
    console.log("Start");
    let msg = await getData(); // waits
    console.log(msg);
    console.log("End");
}

run();

//Reject

function login() {
    return new Promise((resolve, reject) => {
        reject("Wrong password");
    });
}

login()
    .then((res) => console.log(res))
    .catch((err) => console.log("Login failed:", err));