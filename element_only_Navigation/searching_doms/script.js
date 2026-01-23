// Searching Dom 
//earching the DOM ka matlab hota hai: DOM (Document Object Model) ke andar se required HTML element(s) ko find/locate karna, 
// taaki unko JavaScript se access karke read, change, ya events add kiye jaa sake (ID, class, tag,
//  ya CSS selector ke through).

// DOM searching (brief):

// getElementById("id") → 1 element

// querySelector("css") → return all element inside an element matching the given css selector

// querySelectorAll("css") → all matches

// getElementsByClassName("class") → all by class

// getElementsByTagName("tag") → all by tag

// getElementsByName("name") → form fields

// Scoped/nearby:

// parent.querySelector(...) → within parent

// el.closest("selector") → nearest parent match

let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "yellow"
console.log(ctitles)

// Matches , element.matches(selector)

// Check karta hai ki ye element khud given CSS selector ko match karta hai ya nahi.

// Match kare to true, warna false.




// element.closest(selector)

// DOM tree me current element se start karke upar (parents) ki taraf jaata hai, aur jo pehla ancestor (ya khud element) given CSS selector ko match kare, use return karta hai.

// Match na mile to null return