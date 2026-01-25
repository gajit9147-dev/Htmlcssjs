// Event is a signal that something has happend all dom nodes generate  signal

document.getElementById("google").addEventListener("click", function() {
    window.location = " https: //www.google.com";
})

const bulb = document.querySelector("#bulb");

setInterval(() => {
    bulb.classList.toggle("bulb");
}, 300);