// tagName = element’s HTML tag (like DIV, P, A).

// Works only for Element nodes.

// Usually uppercase in HTML docs.



// nodeName = node’s name depending on node type.

// For Element nodes: same as tagName (DIV, P).

// For Text nodes: #text

// For Comment nodes: #comment

// For Document: #document


// let x = document.getElementsByTagName('span')[0]
// console.log(x)

// let y = document.getElementsByTagName('span')[0]
// console.log(y)


// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// console.log(x.innerHTML) // innerHTML property allow to get the HTML inside the element as string
// console.log(y.innerHTML) // innerHTML is vaild only for element node .for other node typr we can use nodevalue or data 


// let x = document.body.firstChild.nodeValue
// console.log(x)
//document.body.firstChild.data


// console.log(x.outerHTML)
// console.log(y.outerHTML) // outerHTML propertycontain the full HTML innerHTML + the element itself

//  textcontant is a DOM property that gives/sets only the text inside an element (no HTML tags)

console.log(document.body.textContent)