const ticket = new Promise(function(resolve, reject) {
    const isBording = true;
    if (isBording) {
        resolve("you are eligible to onbording ")
    } else {
        reject("your are not eligible to onbording")

    }
})
ticket.then((data) => {
    console.log("wohoo", data);

}).catch((data) => {
    console.log("oh no", data);
})

//promies function actually do solve and reject