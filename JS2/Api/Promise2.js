let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                name: "Shubham",
                email: "shubham@example.com"
            })
        }else{
            reject("Something went wrong, it's not you it's us")
        }
    } , 1000)
})

promise.
then(function(user){
    console.log(user)
    return user.name
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The Promise is either resolved or rejected")
})