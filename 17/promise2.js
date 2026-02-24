let promise = new Promise(function (resolve, reject){
    console.log("inside a promise");
    resolve("Promise resolved");
})

console.log("After promise");

promise
.then(function (result){
    console.log(result);
})