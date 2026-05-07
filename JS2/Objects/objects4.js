const user2 =  {
    name2: "Shubham",
    email2: "shubham@example.com",
}

const user3 = {
    name3: "Pratibha",
    email3: "pratibha@example.com"
}

const user4 = {
    name4: "Aadya",
    email4: "aadya@example.com"
}

const user5 = {
    user2,
    user3,
    user4,
}

const user6 = Object.assign({}, user2, user3, user4)

//Object.assign() does not help to merge all objectsif in all the objects have the same keys

user5.extends

console.log(user2);
console.log(user5);
console.log(Object.keys(user6));
console.log(Object.values(user6));
console.log(Object.entries(user6));
console.log(user6.hasOwnProperty("name2"));
console.log(user6.hasOwnProperty("name5"));