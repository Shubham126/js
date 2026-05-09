const userEmail = "s@example.com"

if(userEmail){
    console.log("Got the user email")
}
else{
    console.log("Don't have user email")
}

// the js assumes that userEmail is a "truthy" values

// we had a list of "falsy" values
// fase, 0, -0, BigInt, On, "", null, undefined, NAN