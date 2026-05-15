// sorting using one loop, time complexity will be better than sorting

function secondLargest(arr){

    let largest = -Infinity
    let secondlargest = -Infinity

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }

        if(arr[i] > secondLargest && arr[i]!== largest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log(secondLargest([10, 5, 8, 20, 15]));