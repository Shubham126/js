let res = document.querySelector("h1");
console.log(res);
//prints information in the browser console

console.dir(res);
//prints an interative list of the properties of the element in the browser console

let name1 = document.getElementById("name");
console.log(name1.tagName);
console.log(name1.nodeName);

let name2 = document.querySelector("h1");
console.log(name2.firstChild.tagName);
console.log(name2.firstChild.nodeName);

//tagName and nodeName are the same for element nodes, but for text nodes, tagName is undefined while nodeName is "#text".

let inner = document.getElementById("inner")
inner.innerHTML = "<h2> Inner HTML changed using JavaScript innerHTML property </h2>";

let outer = document.getElementById("outer")
outer.outerHTML = "<h2> Outer HTML changed using JavaScript outerHTML property </h2>";

let text = document.getElementById("text")
text.textContent = "Text content changed using JavaScript textContent property";

let attri = document.getElementById("attri");
console.log(attri.hasAttributes());
document.getElementById("attri").setAttribute("placeholder", "Enter your name");
let gettingAttribute = attri.getAttribute("id");
console.log(attri.hasAttribute("placeholder"));
console.log(gettingAttribute);
attri.removeAttribute("placeholder");
console.log(attri.hasAttribute("placeholder"));