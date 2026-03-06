class animal{
    sound(){
        console.log("this animal makes sound")
    }
}

class dog extends animal{
    sound(){
        console.log("dog barks");
    }
}

let kutawa = new dog()

kutawa.sound();