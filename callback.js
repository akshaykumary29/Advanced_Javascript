// Callback function 
// A callback is a function passed as an argument to another function

function login(firstName, lastName, email, callback) {
    setTimeout(() => {
        console.log("Inside Login Page");
        callback();
    }, 2000)
}

function details(callback) {
    setTimeout(() => {
        console.log("Enter firstname, lastname and email");
        callback();
    }, 2000)
}

function submit(callback) {
    setTimeout(() => {
        console.log("Successfully!");
        callback();
    }, 2000)
}

const user = login("firstName", "lastName", "email", () =>{
    details(() => {
        submit(() => {

        })
    })
})

