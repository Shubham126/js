class animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats`)
    }
}

class dog extends animal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log(`${this.name} barks`)
    }
}

class cat extends animal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log(`${this.name} meows`)
    }
}

let pussy = new cat("pussy")
pussy.meow();
pussy.eat();

let booboo = new dog("booboo")
booboo.bark();
booboo.eat();