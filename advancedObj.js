// --------->> REFERENCE TYPE <<---------

const object01 = {value: 10}
const object02 = object01
const object03 = {value: 10}


console.log(object01 === object02); // true
// it says that I'm(object02) at the same address where she(object01) is. 
// so it returns true.

console.log(object01 === object03); // false
// in different analogy, an object works like a box itself. object01 and objbect03 are two separate boxes.
// no matter what the value these two objects hold and even though the values are exactly look same, 
// these values are in two separate boxes(addresses).
// so the result is false.



// CAUTION: ----------->>
object02.value = 12
console.log("object01", object01); // 12
console.log("object02", object02); // 12
// since 'object02' refers to 'object01', if you change value from any of them, 
// following reference type, both value will be changed to 12.
// it is passed by reference. location is same.

// try cloning instead:
const obj01 = {value: 10}
const obj02 = {...obj01} // cloning w Spread Operator. allocating in a different box.

obj02.value = 133; 

console.log("obj01", obj01); // 10
console.log("obj02", obj02); // 133

console.log("FALSE?: ", obj01 === obj02); // false






// -------->> CONTEXT - Concept of THIS in Object <<----------

console.log(this); // 'this' means the window obj, the root
console.log(this === window); // so the result is --> true

const object04 = {
    a: () => {
        console.log(this);
    }

}

console.log(object04);
// So "this" refers to what obj it is in = what is in its left = what obj it is inside of




// ---------->> Instantiation <<---------------

// to create many many players like Harry Potter, Wizards ect.
// You'll need blueprint or template
// you'll use "class" and "this" will be handy.
// to find example of it, see app.js file.