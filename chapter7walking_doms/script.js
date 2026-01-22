// walking dom DOM walking” (also called DOM traversal) means moving through the HTML DOM tree to find elements:
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

// childNodes it is look like a array but it is not array but it is collaction .. we can use array from(collaction)to convert into array

let array = Array.from(document.body.childNodes)

console.log(array)