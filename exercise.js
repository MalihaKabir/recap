// ----------->> BASIC SIGNIN <<-----------
let database = [
    {
        userName: "Maliha",
        password: "secret11"
    },
    {
        userName: "Munna",
        password: "secret11"
    },
    {
        userName: "Manna",
        password: "123"
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


// // ---->> FIND ONLY FROM THE FIRST ONE <<----
// let signIn = function signIn(name, pass) {
//     if ((name === database[0].userName) && (pass === database[0].password)) {
//         console.log(timeLine);
//     } else {
//         alert("please enter correct name and correct password.")
//     }
// }

// signIn(enterName, enterPass)


// ----->> FIND THE RIGHT ONE ONLY <<-----
// let isUserValid = database.map((element) => {
//     return ((enterName === element.userName) && (enterPass === element.password)) 
// })

// if (isUserValid.includes(true)) {
//         alert("Hurray!");
//     } else {
//         alert ("Sorry!")
//     }
// // but .map() is for transforming data, not for finding or filtering.



let isUserValid = database.find((element) => {
    return ((enterName.includes(element.userName)) && (enterPass.includes(element.password))) 
})

if (isUserValid) {
        alert("Hurray!");
    } else {
        alert ("Sorry!")
    }



// let isUserValid = database.find((element) => {
//   return enterName === element.userName && enterPass === element.password;
// });

// if (isUserValid) {
//   alert("Hurray!");
// } else {
//   alert("Sorry!");
// }






// --------------->>

// let isUserValid = database.map((element) => {
//     return element === ((enterName.includes(element.userName)) && (enterPass.includes(element.password))) 
// })


// let isUserValid = database.find((element) => {
//     return ((enterName.includes(element.userName)) && (enterPass.includes(element.password))) 
// })


// let isUserValid = database.find((element) => {
//   return enterName === element.userName && enterPass === element.password;
// });

// if (isUserValid) {
//   alert("Hurray!");
// } else {
//   alert("Sorry!");
// }



const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

// const discounted = products.map(p => {
//   p.price = p.price * 0.9;
//   return p;
// });

const discounted = products.map(p => ({
  ...p,
  price: p.price * 0.9
}));


console.log(discounted);
console.log(products);

