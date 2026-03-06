class car{
    constructor(brand, color){
        this.brand = brand,
        this.color = color
    }

    make(){
        console.log(`Your ${this.brand} car of ${this.color} color is in making`)
    }
}

let car1 = new car("BMW", "Red");

car1.make();