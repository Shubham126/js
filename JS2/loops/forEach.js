const coding = ['JavaScript', 'Python', 'Ruby', 'Go', 'C++'];

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printItem(item){
    console.log(item);
}

coding.forEach(printItem);