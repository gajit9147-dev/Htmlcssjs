input.getAttribute("value"); // original HTML value
input.value;


getAttribute(name)

Get the exact attribute value written in HTML.

el.getAttribute("href");

setAttribute(name, value)

Create / update an attribute.

el.setAttribute("title", "Hello");

removeAttribute(name)

Remove an attribute.

el.removeAttribute("disabled");

hasAttribute(name)

Check attribute exists or not.

el.hasAttribute("checked");

toggleAttribute(name, force ? )

Add
if missing, remove
if present(optional true / false force).

el.toggleAttribute("hidden");

attributes

All attributes list(NamedNodeMap).

console.log(el.attributes);