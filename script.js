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


// Usage of array in Obj
const classMates = [
    { name: "Jane", age: 20 },
    { name: "John", age: 35 },
    { name: "Doe", age: 28 },
    { name: "Sam", age: 35 }
]

let classMateAge35 = classMates.find(element => element.age === 35)
let classMateAge35All = classMates.filter(element => element.age === 35)

// IMPORTANT NOTE FOR MAP()
// map() always returns the same number of items as the original array. It just transforms each item. 
// map does not remove items, it only changes them.
let nameOfAll35 = classMateAge35All.map(element => element.name)

// filter inside map()
let filterInsideMap = classMates.map(element => {
    if (element.age < 35) return element.name;
})
// See that map() still gives an array with the same length as the original.
// The ones that don’t match the condition become undefined.
// filter() removes the items that don’t match your rule. Then map() only transforms the ones left.
// So you cannot filter inside map(), use filter() to filter and then transform elements the way you want with map().


console.log(classMateAge35);
console.log(classMateAge35All);
console.log(nameOfAll35);
console.log(filterInsideMap);


