let elementToRemove = document.querySelector("h2");
elementToRemove.remove();


let practice = document.getElementById("box")

console.log(document.getElementById("box").className);

practice.className = "dark";

console.log(practice.className);


let practice2 =  document.getElementById("shape")
console.log(practice2.classList);

practice2.classList.add("circle");

console.log(practice2.classList);

practice2.classList.remove("song")

console.log(practice2.classList);

//setTImeout();
//setInterval();
//clearTimeout();
//clearInterval();
