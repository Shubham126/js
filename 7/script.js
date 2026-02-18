console.log(document.body.childNodes);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

console.log(document.body.lastChild);

let div = document.querySelector("div");
console.log(div)
console.log(div.parentNode);

let h1 = document.querySelector("h1");
console.log(h1.nextSibling);
console.log(h1.nextElementSibling);

let p = document.querySelector("p");
console.log(p.previousSibling);
console.log(p.previousElementSibling);
