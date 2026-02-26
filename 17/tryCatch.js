try{
    console.log("Try block");
    let result = 10 / 0;
    console.log(result);
}catch(error){
    console.log("Catch block");
}
finally{
    console.log("Finished")
}

try{
    console.log(username);
}catch(error){
    console.log("Error:", error)
}

function age(age){
    if(age < 18){
        throw new Error("you are underage");
    }
    return "Access granted";
}

try{
    console.log(age(20));
    console.log(age(15));
}catch(error){
    console.error('Error:', error.message);
}
