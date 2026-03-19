const boys = [
    {
        name: "abc",
        age: 21,
        fname: "def"    
    },
    {
        name: "ghi",
        age: 22,
        fname: "jkl"    
    },
    {
        name: "mno",
        age: 23,
        fname: "pqr"    
    }
];

const user = boys.find(person => person.name == "abc");
console.log(user);