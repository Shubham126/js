const boys = [
    {
        name: "abc",
        age: 22,
        fname: "def"    
    },
    {
        name: "abc",
        age: 22,
        fname: "def"    
    },
    {
        name: "abc",
        age: 22,
        fname: "def"    
    }
];

boys.forEach((people, index) => {
    console.log(index, people.name);
})