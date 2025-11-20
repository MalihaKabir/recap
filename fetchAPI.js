// ------------>> API Calling <<--------------
// API is like a waiter/waitress in a restaurant. 
// You call the waiter > order the dish you want > and get it after it cooked.
// API or the waiter goes to the kitchen > ask the cook to prepare it > give it to you once it's ready.
// You usually don't ask how your dish is prepared.
// All you care about is receiving the result, your dish.
// And now, you eat.
// Etiquette to talking to the waiter == Syntax to talikng to an API 
// or fetching (sending and receiving from) an API.
// "fetch()" is a method that returns a PROMISE.
// Etiquette or Syntax to GET your dish or a response: -------->>
// let promise = fetch(url) --> GET req.
// then how you eat the dish == how you write the object from the result

const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10"; // end point or the waiter.
let img = document.getElementById("imgSRC");

// since PROMISE works asynchronously, use async() and await for each action...
const getIMG = async () => {
    console.log("getting data . . .");
    let responsefromAPI = await fetch(apiUrl);
    console.log(responsefromAPI.status);
    // you get a response that is an object. 
    // Now you need to make it usable for your web page or suitable for your body to accept.
    // chew with JSON. it returns a second promise to you.
    let data = await responsefromAPI.json();
    console.log(data[0]);
    // img.setAttribute("src", data[0].url) // or
    img.src = data[0].url
    img.height = data[0].height;
    img.width = data[0].width;  
}

getIMG()