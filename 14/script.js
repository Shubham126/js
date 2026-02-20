let element = document.getElementById("box");

let styling = document.querySelector("body");
styling.style.backgroundColor = "#1a1a1a";
styling.style.color = "white";

let newElement1 = document.createElement("h2");
newElement1.textContent = "Appended h2 from javascript";

element.append(newElement1);

let newElement2 = document.createElement("h2");
newElement2.textContent = "prepended h2 from javascript";

element.prepend(newElement2);

let newElement3 =  document.createElement("h1");
newElement3.textContent = "Inserted h1 from javascript using after";

element.after(newElement3);

let newElement4 = document.createElement("h1");
newElement4.textContent = "Inserted h1 from javascript using before";

element.before(newElement4);
