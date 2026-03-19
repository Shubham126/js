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

for(const index in boys){
    console.log(boys[index].name)
}