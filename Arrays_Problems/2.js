// remove duplicate elemts without using the set

function removeDuplicates(arr){
    const res = []

    for(let i = 0; i<arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i]);
        }
    }

    return res;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 5, 7, 8, 6, 2,1]

console.log(removeDuplicates(arr));