let currentDate = new Date();
console.log(currentDate)

var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));


const user = {
  name: "Abhinav",
  age: 22,
  city: "Delhi"
};

const jsonString = JSON.stringify(user);

console.log(jsonString);