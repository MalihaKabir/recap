// ----------------->> DOM MANIPULATION <<--------------------

// TO: 
// 1. Change all the HTML elements in the page,
// 2. change all the HTML attributes in the page,
// 3. remove existing HTML elements and attributes,
// 4. add new HTML elements and attributes,
// 5. change all the CSS elements in the page,
// 6. react to all existing HTML events in the page,
// 7. create new events in the page.

console.log(document.querySelector("li"));
console.log(document.querySelector("li").getAttribute("random"));

document.querySelector("li").setAttribute("random", 100)

console.log(document.querySelector("li"));
console.log(document.querySelector("li").getAttribute("random"));


// ------->> The result I got in console <<-------
// <li random="100">Notebook</li>
// 23
// <li random="100">Notebook</li>
// 100


// The console shows the real object, the updated result, not a frozen result.
// Even if I change it later, the console still shows the most current version.

// But when I read the tag (with getAttribute), I get the value right now, at that moment, not later.
// This is JavaScript's "console.log" behavior.


document.querySelector("h2").style.background = "yellow";