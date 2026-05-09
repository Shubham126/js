const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //db calls
    // cryptography

    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // without resolve, the .then keyword is not connected
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Shubham",
            email: "shubham@example.com"
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})