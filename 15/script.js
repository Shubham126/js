let example = document.querySelector("#box");

example.insertAdjacentHTML("beforebegin", "<h1> Before Begin </h1>")

example.insertAdjacentHTML("afterbegin", "<h2> after begin </h2>");

example.insertAdjacentHTML("beforeend", "<h2>before end</h2>")

example.insertAdjacentHTML("afterend", "<h1> after end </h1>")