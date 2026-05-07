console.log(addOne(25)) // this will work because of hoisting, the function declaration is hoisted to the top of the scope

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5)) // this will give an error because addTwo is a function expression and it is not hoisted

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(4));

// console.log(addThree(3)) // this will give an error because addThree is an arrow function and it is also not hoisted 

const addThree = (num) => {
    return num + 3;
};

console.log(addThree(3));

//function expressions are not hoisted, they are treated as normal variables and they are not initialized
//  until the code is executed. So when we try to call addTwo before it is defined,
//  it will give an error because addTwo is not defined at that point in the code.