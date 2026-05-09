async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}

// we can also wrap the same thing in the try catch block

async function getAllUsersAsync(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log("E: ", error)
    }
}

let promise = fetch('https://jsonplaceholder.typicode.com/users')

promise
.then(function(response){
    return reponse.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally excecuted")
})

// getAllUsers()

// getAllUsersAsync()