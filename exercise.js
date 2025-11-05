// ----------->> BASIC SIGNIN <<-----------
let database = [
    {
        userName: "Maliha",
        password: "secret11"
    }
]

let timeLine = [
    {
        userName: "Sneha",
        feed: "tired of learning."
    },
    {
        userName: "Mango",
        feed: "javascript is too cool"
    }
]


let enterName = prompt("Enter your name")
let enterPass = prompt("enter your password")

let signIn = function signIn(name, pass) {
    if ((name === database[0].userName) && (pass === database[0].password)) {
        console.log(timeLine);
    } else {
        alert("please enter correct name and correct password.")
    }
}

signIn(enterName, enterPass)