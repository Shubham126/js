const user = {
    username : "Shubham",
    age: 24,
    email: "shubham@example.com",

    welcome : function(){
        console.log(`welcome ${this.username}`)
    }
}

user.welcome(); // using "this" keyword here we can print "welcome Shubham"

function age(){
    console.log(this) // it will return a lot of things here
}

age();

const email = function(){
    email: "example@example.com"
    console.log(this.email);
}

email(); // it will return undefined here

const password = () => {
    password:"Aventador"
    console.log(this.paswword) // it will also return undefined here 
}

password();
