function fetData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data not found");
        }, 2000)
    })
}

(async function getData(){
    try{
        const data = await fetData();
        console.log(data);
    }
    catch(error){
        console.error("Error:", error.message);
    }
    finally{
        console.log("Finished");
    }
})();