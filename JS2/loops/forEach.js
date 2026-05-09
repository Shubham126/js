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

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        language: 'JavaScript',
        languageFilename: 'js'
    },
    {
        language: 'Python',
        languageFilename: 'py'
    },
    {
        language: 'Ruby',
        languageFilename: 'rb'
    },
    {
        language: 'Go',
        languageFilename: 'go'
    }
]

myCoding.forEach( (item) => {
    console.log(item.language, item.languageFilename);
});