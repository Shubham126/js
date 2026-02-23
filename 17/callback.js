// Do this then call me -> callback
// A function is passed as an argument to another function to exceute later
// It can be synchronous or asynchronous

function greet (name, callback){
    console.log(`Hello ${name} this is an example of synchronous callback function`)
    callback(name);
}

function sayBye(name){
    console.log(`Goodbye ${name}`);
}

greet('Shubhra', sayBye);

function greetAsync(name, callback){
    setTimeout(() => {
        console.log(`Hello ${name} this is an example of asynchronous callback function`)
    }, 2000);
    callback(name);
}

function heard(name){
    console.log(`${name} I heard your name first because this is an asynchronous callback`);
}
greetAsync('Shubhra', heard);

// function test(callback){
//     console.log("start");
//     callback();
//     console.log("end");
// }

// test(function() {
//     console.log("inside callback")
// })