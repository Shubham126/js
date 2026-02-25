console.log("step 1")
console.log("step 2");
console.log("step 3");

console.log("step 4");
setTimeout(()=> {
    console.log("step 5");
}, 2000);
console.log("step 6")   

async function test() {
    console.log("A");
    await Promise.resolve("B");
    console.log("C");
}

console.log("Start");
test();
console.log("End");