let numbers = [1, 2, 3, 4, 5]

for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}

numbers.forEach((value, index)=>{
    console.log("Value at Position "+index+" is "+value);
})

let colours =  ["Red", "green", "blue"];
for( let colour of colours){
    console.log(colour);
}

let animals =  ["Dog", "Cat", "Elephant"];
for(let index in animals){
    console.log(animals[index]);
}