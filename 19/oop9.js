class animal{

    constructor(name){
        this.name = name;
    }
    eat(name){
        console.log(`${this.name} is eating`)
    }
}

let dog = new animal("tommy");

dog.eat();