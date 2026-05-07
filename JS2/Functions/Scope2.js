// nested scope

function one(){
    const username = "Shubham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // this will give an error because website is not accessible outside the function two

    two()
}

one()