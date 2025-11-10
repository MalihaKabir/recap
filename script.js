// ------------>> Syntax & Behaviors of <<---------------------
// 1. Conttrol Flow,
// 2. Loop,
// 3. Data Structure - Array [find(), filter(), some(), includes(), splice(), toSplice(), slice(), join(), reduce()],
// 4. Callbacks, Promises, 
// 5. Async Await.

// ------------->>

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
console.log(useSomeinString); // return boolean just like includes().
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


// --------->>  IMPORTANT NOTE FOR MAP(), SPLICE(), SLICE(), JOIN(), REDUCE() <<------------

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


console.log("find", classMateAge35);
console.log(classMateAge35All);
console.log(nameOfAll35);
console.log(filterInsideMap);


list.splice(3, 0, "Rabbit") // use toSpliced() if you want to do the same but create a new array. Same syntax.

// Example:
let useToSplice = list.toSpliced(0, 1) // it'll delete one item from index zero.

console.log(list);
console.log("useToSplice", useToSplice);

// You can also replca one element at index 1 with two new elements
let addWithToSplice = list.toSpliced(0, 2, "meaow", "bhaow")

console.log("addWithToSplice", addWithToSplice); // Original array is not modified


let listSlice = list.slice(1, 3)

console.log("listSlice", listSlice);

console.log(list.join("-"));

// usage of reduce()
const numbers = [2, 2, 2]

let sumOfNumbers = numbers.reduce((element1, element2) => element1 + element2, 5) // Five meaning start adding with Five.

let reduceList = list.reduce((element1, element2) => element1 + "-" + element2, "My favourits:")

console.log(sumOfNumbers);
console.log(reduceList);

// join() is like a shortcut that only makes strings. And join all array items into one string.
// reduce() can do much more — reduce() join elements in any way you want, start from wherever/however you want. 
// reduce() also can do math, build objects, merge arrays, or even count stuff — not just join text.



// --------->> CALLBACKS <<------------