(function hello(){ 
    console.log("hello world")
})(); // this is also known as named iife, and the semi colon is very important for any  type of iife

( () => {
    console.log("hello from arrow function")
})();// this is an unnamed iife

( (name) => {
    console.log(`hello ${name}`)
})("shubham");