const coding = ['JavaScript', 'Python', 'Java', 'C++'];

const values = coding.forEach(item => {
    console.log(item);
    return item; // this return value is not used by forEach
})

console.log(values); //undefined

//forEach doesn't return anything, it just executes the provided function for each element in the array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter( (num) => {
    return num > 5;
})

console.log(newNums); 

//the way to achieve the same result using forEach
const newNums2 = [];

myNums.forEach( (num) => {
    if(num > 5){
        newNums2.push(num); // this return value is not used by forEach
    }
})
console.log(newNums2);