//Promise chaining means: you use .then() one after another, and each .then() returns a new promise. Whatever you return goes to the next .then().
let p = new Promise((resolve, reject) => {
    console.log("Resolve adter 2 second")
    resolve(57)
})

p.then((value) => {
    console.log(value)

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2")
        }, 2000)

    })
    return p1
}).then(() => {
    console.log("We are done")
}).then(() => {
    console.log("Pinky promise done this work")
})