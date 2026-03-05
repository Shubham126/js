let student = {
    name: "Subham",
    age: 22,
    study: function(){
        console.log(`${this.name} is studying`);
    }
}

console.log(student.name);
student.study();