function downloaad(callback){
    setTimeout(() => {
        console.log("Downloaded")
        callback();
    }, 2000)
}

function render(callback){
    setTimeout(()=>{
        console.log("Rendered")
        callback();
    }, 2000)
}

function save(){
    setTimeout(()=>{
        console.log("saved")
    }, 2000)
}

downloaad(function(){
    render(function(){
        save();
    })
})