let human = {
    eat: true,
    sleep: true,
    walk: true,
    talk: true
}

let boy = {
    name: "Subham"
}

Object.setPrototypeOf(boy, human);
console.log(boy.name);
console.log(boy.eat);