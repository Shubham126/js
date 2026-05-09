const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = numbers.map( (num) => {
    return num + 10;
})

console.log(newNums);

//chaining

const newNums2 = numbers
.map( (num) => num * 10)
.map( (num) => num + 6)
.filter((num) => num > 50 && num < 100);

console.log(newNums2);