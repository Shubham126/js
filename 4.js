let arr = [1, 2, 3, 4, 5];

console.log(arr);

//7
delete arr[1];
delete arr[3];
console.log(arr);

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

//8
console.log(arr1.concat(arr2));

//9
let arr3 = [2, 6, 1, 8, 3, 4]
console.log(arr3.sort());

//10
console.log(arr3);
console.log(arr3.reverse());


//11
let number = [1, 2, 4, 6, 8];
number.splice(2, 0, 12, 14);
console.log(number);

//12
let integers = [1, 2, 3, 4, 5];
console.log(integers.slice(2));
console.log(integers.slice(2, 4));