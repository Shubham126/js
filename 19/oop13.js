class Calculator{
    constructor(name){
        this.username = name;
    }

    name(){
        console.log("hello " + this.username)
    }

    static sum(a, b){
        console.log(a+b);
    }
}

class Boy extends Calculator{
    constructor(name){
        super(name);
    }
}

let shubham = new Boy("shubham")

shubham.name();
Calculator.sum(5, 4);