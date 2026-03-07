class human{
    constructor(name){
        this.username = name;
    }

    get name(){
        return this.username
    }

    set name(newname){
        this.username = newname;
    }
}

let boy = new human("Shubham")
console.log(boy.name);

boy.name = "cheeku"

console.log(boy.name);