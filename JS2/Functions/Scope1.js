let a = 26 // here a is a global variable
let d = 2

if(true){
    let a = 100 // here a is a local variable and it is different from the global variable a
    const b = 200
    var c = 300
    console.log("Inner : " + a)
    console.log("Inner : " + d); // since d is a global variable, it can be accessed inside the block
}

console.log(c)

console.log( "outer : " + a)