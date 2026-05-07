function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100, 200, 500));

const user = {
    username: "hitesh",
    price: 99,
}

function handleObject(anyObject){
    console.log(`Username: ${anyObject.username}, Price: ${anyObject.price}`);
}

handleObject(user);