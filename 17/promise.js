// this is the basic syntax of a promise in JavaScript

let myPromise = new Promise( function (resolve, reject){
    let success = true;

    if (success){
        resolve("Promise resolved successfully!");
    }
    else{
        reject("Promise rejected!");
    }
});

//Promise flow

// Step 1 → Promise created
// Step 2 → It runs immediately
// Step 3 → It calls resolve OR reject
// Step 4 → .then() handles success
// Step 5 → .catch() handles error

myPromise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})