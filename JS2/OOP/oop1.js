// user is an object literal, literally an object

const user = {
    username: "Shubham",
    loiginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        console.log("Got user details from database")
    }
}

console.log(user.username);