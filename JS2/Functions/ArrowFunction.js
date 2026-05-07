const hello = (username) => {
    return(`Hello ${username}`)
}

console.log(hello("Shubham"));

const meow = (voice) => `Hello ${voice}` // this is also an arrow function with implicit return
console.log(meow("meow"))

const pspsps = (voice) => (`Tell you cat I said ${voice}`) // we can also write arrow function like this
console.log(pspsps("pspsps"))

const objectification = (email) => ({email: `${email}`}) // this type of arrow function help us return objects too
console.log(objectification("shubham@example.com"))