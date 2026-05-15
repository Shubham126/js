// find the 2nd largest element in the array

function secondLargest(arr){

    let uniqueArr = [...new Set(arr)];

    uniqueArr.sort((a, b) => b - a)

    return uniqueArr[1]
}

console.log(secondLargest([10, 5, 8, 20, 15]))