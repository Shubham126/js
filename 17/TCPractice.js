try{
    console.log("A")
    throw new Error("An error occured");
    console.log("B")
}catch(error){
    console.log("C", error.name);
}
finally{
    console.log("D")
}