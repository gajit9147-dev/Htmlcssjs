let user = prompt("Enter S, W or G ");

let cpu = Math.floor(Math.random() * 3);
let cpu1 = ["S", "W", "G"][cpu];

user = (user || "").trim().toUpperCase();

const match = (cpuChoice, userChoice) => {
    if (!["S", "W", "G"].includes(userChoice)) return "Invalid input";

    if (cpuChoice === userChoice) return "Nobody. Match tie";
    if (cpuChoice === "S" && userChoice === "W") return "cpu";
    if (cpuChoice === "G" && userChoice === "W") return "user";
    if (cpuChoice === "S" && userChoice === "G") return "user";
    if (cpuChoice === "G" && userChoice === "S") return "cpu";
    if (cpuChoice === "W" && userChoice === "G") return "cpu";
    if (cpuChoice === "W" && userChoice === "S") return "user";
};

let result = match(cpu1, user);

document.writeln(`CPU: ${cpu1} and USER: ${user} <br> The winner is: ${result}`);