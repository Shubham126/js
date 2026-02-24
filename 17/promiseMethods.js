let p1 = Promise.resolve(10);
let p2 = Promise.reject("Error occured");
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})

let p4 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
let p5 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));

Promise.race([p4, p5])
    .then(result => console.log(result));

let p6 = Promise.resolve("Success");
let p7 = Promise.reject("Failed");

Promise.allSettled([p6, p7])
    .then(result => console.log(result));


let p8 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
let p9 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));

Promise.race([p8, p9])
    .then(result => console.log(result));


let p10 = Promise.reject("Error 1");
let p11 = Promise.resolve("Success!");
let p12 = Promise.reject("Error 2");

Promise.any([p10, p11, p12])
    .then(result => console.log(result));