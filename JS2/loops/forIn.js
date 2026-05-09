const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift'
}

for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
}

const arr = ["india", "usa", "france", "germany"];

for (key in arr){
    console.log(`${key} : ${arr[key]}`);
}

//for in loop can't iterate over the maps