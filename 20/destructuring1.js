let student = {
    name: "shubham",
    age: 21,
    love: false
}

console.log(student.name);

let {name: username, age}= student;

console.log(username);
console.log(age);