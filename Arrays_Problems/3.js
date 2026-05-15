// flatten an array 

function flatten(arr){

    return arr.flat(Infinity)
}

const arr = [1, [2, 3], [4, [5, 6]]]

console.log(flatten(arr));