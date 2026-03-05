let human = {
    walk: true,
    talk: true,
    eat: true
}

let boy = {
    name: "Subham",
}

boy.__proto__ = human;

console.log(boy.name);
console.log(boy.walk);

