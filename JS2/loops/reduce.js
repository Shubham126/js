const myNums = [1, 2, 3]

myTotal = myNums.reduce(function(accumulator, currval) {
    console.log(`accumulator : ${accumulator} , currval : ${currval}`);
    return accumulator + currval;    
}, 0) // whatever we pass here will be the initial value of accumulator,
//  if we don't pass anything then accumulator will be the first element of the array and currval will be the second element of the array.

console.log(myTotal);

myTotal2 = myNums.reduce( (accumulator, currval) => {
    console.log(`accumulator : ${accumulator} , currval : ${currval}`);
    return accumulator + currval;    
}, 0)

console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 999,
    },
    {
        itemName: "python Course",
        price: 1999,
    },
    {
        itemName: "java Course",
        price: 2999,
    },
    {
        itemName: "c++ Course",
        price: 3599,
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, item) => {
    return accumulator + item.price;
}, 0)

console.log(totalPrice);