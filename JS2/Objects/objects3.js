const user = new Object()

user.id = "123abc"
user.name="Shubham"
user.loggedIn = false

console.log(user);

const user2 = new Object({
    email: "shubham@example.com",
    fullname: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Kumar"
        }
    }
})

console.log(user2.fullname)
console.log(user2.fullname.userfullname.firstname);