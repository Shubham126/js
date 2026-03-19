const boys = [
    {
        name: "abc",
        age: 22,
        fname: "def"    
    },
    {
        name: "ghi",
        age: 22,
        fname: "jkl"    
    },
    {
        name: "mno",
        age: 22,
        fname: "pqr"    
    }
];

const names = boys.map(person => person.name);
console.log(names);