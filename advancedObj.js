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


// -------->> CONTEXT <<----------
