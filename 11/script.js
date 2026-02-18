let hello = document.getElementsByClassName("hello");
let namaste = document.getElementById("namaste");

console.log(hello);
console.log(namaste);

let world = document.querySelector("#namaste");
console.log(world);

let div = document.querySelector("h1");
console.log(div);

let divs = document.querySelectorAll("h1");
console.log(divs);

let para = document.getElementsByTagName("p")
console.log(para);

let emailInput = document.getElementsByName("email");
console.log(emailInput);

// document.querySelector("#title");   // id
// document.querySelector(".card");    // class
// document.querySelector("div");      // tag
// document.querySelector("div p");    // nested
