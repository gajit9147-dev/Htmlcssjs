let a = new Promise((resolve, rejected) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("your promised is fullfiled")
        resolve(true)

    }, 3000)
})

let b = new Promise((resolve, rejected) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("your promised is rejected")
        rejected(new Error("your are rejected"))

    }, 3000)
})

console.log(a, b)

a.then((value) => {
    console.log(value)
})

b.catch((error) => {
    console.log(error)
})