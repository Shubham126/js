let heading1 = document.querySelector("#heading1");
heading1.style.color = "blue";

let newpara = document.createElement("p");
newpara.textContent = "this is a a new paragraph created using javascript";

newpara.setAttribute("id", "para1");
newpara.style.color = "green";

heading1.append(newpara);