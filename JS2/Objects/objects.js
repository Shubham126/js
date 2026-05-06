//singleton
// Object.create()
// constructor method of creating objects

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Shubham",
    "full name": "Shubham Kumar",
    location: "Delhi",
    [mySym]: "mykey1",// this is a way to declare a symbol key in an object
    age: 24,
    email: "chromaticshubham26@gmail.com",
    isLoggesIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
} 

// access objects
console.log(JsUser.name);
console.log(JsUser["name"]);
// full name can't be accessed by dot notation because of space in between
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // This is how we can access the symbol key in an object

Object.freeze(JsUser) // this will make the object immutable, we can't change the values of the object after freezing it
