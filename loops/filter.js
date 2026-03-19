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

const adults = boys.filter(person => person.age >= 22);
console.log(adults);