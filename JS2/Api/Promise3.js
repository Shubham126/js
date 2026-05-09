const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "Shubham",
                email:"shubham@example.com"
            })
        } else{
            reject("It's not you it's us")
        }
    }, 1000)
});

async function consumePromises(){
    try{
        const response = await promise
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromises();