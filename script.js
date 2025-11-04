// // Comparison
// let color = "red";
// if (color === "red") {
//     console.log("Right!")
// } else {
//     console.log("Try again!")
// }


// Data structure - Attay
const list = ["cat", "dog", "tiger"]
// list.shift(1)
// console.log(list)
let myList = list.concat(["snake", "rabbit"])
console.log(myList);
// myList.pop()
// myList.push("apple")
// console.log(myList);

// const items = ["item1", "item2", "item3"];
const copyList = [];

// for (let i = 0; i < myList.length; i++) {
//   copyList.push(myList[i]);
// }

list.forEach((element) => {
    copyList.push(element)
});


copyList.unshift("mango")
console.log(copyList);

let mapList = list.map(element => element + " deserves to live.");
console.log(mapList);

let useFindInString = list.find(element => element.includes("t"))

let useFilterInString = list.filter(element => element.includes("t"))

let useSomeinString = list.some(element => element.includes("g"))

let useFilterWithLength = list.filter(element => element.length < 4)

console.log(useFindInString); // return the new array w the first matched element.
console.log(useFilterInString); // return the new array w its elements.
console.log(useSomeinString); // return boolean.
console.log(useFilterWithLength);


