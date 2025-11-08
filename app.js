// Syntax and behaviors of: Object - Classes - Inheritance - Error Handling - 

// Object contains property and method. In short, it stores variable and behaviors.

const student = {
    fullName: "Maliha A. Kabir",
    marks: 74,
    printMark: function () {
        console.log("marks is ", this.marks); // this = student, this.marks = student.marks
        
    }
}

// student.printMark()

// JS Object has special property called prototype which contains property & method
// We can set prototype using  __proto__

const malihaA = {
    rollNum: 1
}

malihaA.__proto__ = student; // prototype of the 'student' object. 
// Using class could be more  suitable if you need to create obj in bulk.
console.log(malihaA.fullName);


// ----------->> CLASS <<--------------
class cars {
    
        startCar () {
            console.log("start the car");
        }
        stopCar () {
            console.log("stop this car");   
        }
        setBrand (brandArg) {
            console.log(this.brand = brandArg); // in this.brand, brand is object's property
            
        }
    
}

let volksWagan = new cars
volksWagan.setBrand("Volks Wagan")


// When to use class
// 1. create form template (or database) to store common data for all or most employee
// 2. create a blueprint for every car's common features
// 3. to store same type data from user/employee/prospect

// but this.brand should be constructed in constructor. So,
class toyCar {
    constructor (toyCarBrandName, milage) {
        console.log(this.brand = toyCarBrandName);
        console.log(this.milage = milage);
        
    }
        startToyCar () {
            console.log("start the tiy car");
        }
        stopToyCar () {
            console.log("stop this  car");   
        }
       
    
}

let volksWaganToy = new toyCar("Volks Wagan Toy Car", 10)
volksWaganToy.startToyCar()

volksWaganToy.brand = "BMW Toy Car"
