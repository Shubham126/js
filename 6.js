console.log("Hello this is log");

console.warn("This is a warning");

console.info("This is an information");

console.error("This is an error message")

console.assert(2===3, "This is not true");

console.table([{name: "Shubham", age: 23}, {name:"Pratibha", age: 25}]);

console.time("for loop");
for(let i =0; i<100000; i++){}
console.timeEnd("for loop");
