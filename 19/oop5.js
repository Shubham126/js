let human = {
    eat: true,
    sleep: true
}

let boy = Object.create(human);

boy.name = "Shubham";

console.log(boy.name);
console.log(boy.eat);