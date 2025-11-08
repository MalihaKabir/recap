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
            console.log("start the toy car");
        }
        stopToyCar () {
            console.log("stop this  car");   
        }
       
    
}

let volksWaganToy = new toyCar("Volks Wagan Toy Car", 10)
volksWaganToy.startToyCar()

volksWaganToy.brand = "BMW Toy Car"
console.log(volksWaganToy);



// ----------->> INHERIT <<------------
class registerForm {
    constructor (name, email) {
        console.log(this.getName = name);
        console.log(this.getEmail = email);
    }
    userProfile () {
        console.log(`Welcome to your profile, ${this.getName}! This is your email: ${this.getEmail}.`);
        
    }
}

class signInForm extends registerForm {
    timeLine () {
        console.log(`Welcome to your timeline ${this.getName}`);
        
    }
}

let newEmployeeReg = new registerForm("Maliha A.", "maliha@email.com");
let newEmployeeSignIn = new signInForm("A. Kabir", "a.kabir@email.com");
console.log("New employee sign in name --", newEmployeeSignIn.getName); // inherited properties too.



// You can create a class for person and extends it for Doctor, Engineer etc. 
// or Create a class for Students and extend it for Teacher in the same campus with more options. 
// or create one for new employee and extend it to give more access for seniors like - as they get promoted.


let humanFood = "All human food"
class personFeature {
    eat () {
        console.log(`Eat ${humanFood}`);
        
    }
    sleep () {
        console.log("Sleep");
        
    }
    work () {
        console.log("Person test work");
        
    }
}

class doctorFeature extends personFeature {
    work () {
        console.log("Doctor solves living body problems.");
        
    }
}

class engineerFeature extends personFeature {
    work () {
        console.log("Engineer solves work problems.");
        
    }
}

let doctorObj = new doctorFeature();
let engineerObj = new engineerFeature()

console.log(doctorObj);


doctorObj.eat()
engineerObj.sleep()
engineerObj.work() // own method of this object will dominate. Child's own feature will dominate every time.
// So overriding "Engineer solves work problems."


// --------->> using SUPER() <<----------
class collegeFeature {
    constructor (branch) {
        this.collegeName = "ABC College."        
        this.branch = branch
    }
    eat () {
        console.log("Eat");   
    }
}

class studentFeature extends collegeFeature {
    // constructor(branch) {
    //     super(); // to call parent-class's constructor. Call superior's constructor, always!
    //     this.branch = branch // 
    // }

    // use Superior's property from Superior's constructor only.
    constructor(branch) {
        super(branch); // pass branch's value to not get 'undefined'. 
        // It'll pass the argument to Superior's property & methods while calling them.
    }
    work () {
        console.log("student");   
    }
}

class teacherFeature extends collegeFeature {
    constructor (branch) {
        super (branch);
    }
    work () {
        console.log("teacher");   
    }
}

let student1Obj = new studentFeature("A branch")
let student2Obj = new studentFeature("B branch")

let teacher1 = new teacherFeature("C bracnh")

console.log(student1Obj.branch); 
console.log(student2Obj.branch);
console.log(teacher1.branch);