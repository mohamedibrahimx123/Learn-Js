//==========================================
//              Data Types
//==========================================
console.log("=== Data Types ===");
console.log(typeof("Hello Mohamed"));    // string
console.log(typeof(1234));              // number
console.log(typeof("1234"));            // string
console.log(typeof(true));              // boolean
console.log(typeof({name: "Mohamed"})); // object
console.log(typeof([]));                // object

// To check if it's an array
console.log([] instanceof Array);          // true
console.log("Ebrahim" instanceof Array);   // false
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Variables
//==========================================
console.log("=== Variables ===");
var name = "Mohamed Ebrahim Awod",
    age = 20,
    job = "Student";

console.log(name);
console.log(age);
console.log(job);
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Concatenation
//==========================================
console.log("=== Concatenation ===");
var firstName = "Mohamed ";
var secondName = "Ebrahim";
console.log(firstName + secondName);
console.log("My Name Is \n Ahmed");
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Template Strings
//==========================================
console.log("=== Template String ===");
let nickname = "Ebrahim";
console.log(`My name Is 
Mohamed ${nickname}`);
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Operators
//==========================================
console.log("=== Operators ===");
console.log(10 + 20);                   // 30
console.log(10 + "20");                 // "1020" (string concatenation)
console.log(typeof(10 + "20"));        // string
console.log(20 - 10);                  // 10
console.log(10 - "10");                // 0

let a = 10;
a++;                                    // a = a + 1
console.log(a);                        // 11
a--;                                   // a = a - 1
console.log(a);                        // 10

let num = 50;
num += 50;                             // num = num + 50
console.log(num);                      // 100
num -= 20;                             // num = num - 20
console.log(num);                      // 80
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Remainder Operators
//==========================================
console.log("=== Remainder Operators ===");
console.log(8 / 2);                   // 4
console.log(8 % 2);                   // 0
console.log(9 / 2);                   // 4.5
console.log(9 % 2);                   // 1
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Comparison Operators
//==========================================
console.log("=== Comparison Operators ===");
console.log(8 == "8");                // true (loose equality)
console.log(8 === "8");               // false (strict equality)
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Number Methods
//==========================================
console.log("=== Number Methods ===");
let check = 100;
console.log(check);                    // 100 (number)
console.log(check.toString());         // "100" (string)

let number = 11.1111234;
console.log(number.toFixed(2));        // "11.11"
console.log(number.toFixed());         // "11"

let copyNumber = 11.5;
console.log(copyNumber.toFixed());     // "12" (rounds up)

let string = "100";
console.log(parseInt(string));         // 100

let id = 100;
console.log(Number.isNaN(id));         // false
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              String Methods
//==========================================
console.log("=== String Methods ===");
const hello = "Hello World";
console.log(hello.charAt(0));          // "H"
console.log(hello.length);             // 11
console.log(hello.indexOf("l"));       // 2
console.log(hello.lastIndexOf("l"));   // 9
console.log(hello.repeat(2));          // "Hello WorldHello World"

let pop = "  look out!  ";
console.log(pop);                      // "  look out!  "
console.log(pop.trim());               // "look out!"
console.log("\n" + "-".repeat(30) + "\n");

console.log("=== String Manipulation Methods ===");
let change1 = "Hello world";
console.log(change1.slice(0, 4));      // "Hell"
console.log(change1.slice(0, 5));      // "Hello"
console.log(change1.split(" "));       // ["Hello", "world"]
console.log(change1.substring(0, 5));  // "Hello"
console.log(change1.slice(5, 0));      // "" (empty string)
console.log(change1.substring(5, 0));  // "Hello"
console.log(change1.substr(6, 5));     // "world"

let change2 = "Hello Hello Hello World";
console.log(change2.replace("Hello", "Hi"));    // "Hi Hello Hello World"
console.log(change2.replaceAll("Hello", "Hi")); // "Hi Hi Hi World"
console.log("\n" + "-".repeat(30) + "\n");

//==========================================
//              Method Chaining
//==========================================
console.log("=== Method Chaining ===");
let chaining = "Hello World";
console.log(chaining.slice(0, 5).replace("Hello", "Hi").startsWith("H")); // true
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              IF Conditions
//==========================================
console.log("=== IF Condition & Nested Conditions ===");
let userName = "Mohamed";
var role = "Admin";

if (userName == "Mohamed") {
    if (role == "Admin") {
        console.log("Hello " + userName);
        console.log("You're Admin");
    }
} else {
    console.log("Thank you");
}
console.log("\n" + "-".repeat(30) + "\n");

//==========================================
//              Ternary Operator
//==========================================
console.log("=== Ternary Operator ===");
console.log(userName == "Mohamed" ? "Hello " + userName : "Thank You");
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Logical Operators
//==========================================
console.log("=== Logical Operators ===");
var checks = "Mohamed";
console.log(checks == "Mohamed" || 0);    // true
console.log(checks == "Ahmed" || 0);      // 0

var nullish1 = "Mohamed";
console.log(nullish1 == "Mohamed" && 0);  // 0

var nullish2 = 0;
console.log(nullish2 == "Mohamed" && 100); // false
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Switch Case
//==========================================
console.log("=== Switch Case ===");
var countryCode = "Eg";

switch (countryCode) {
    case "Eg":
        console.log("Welcome To Egypt");
        break;
    case "Br":
        console.log("Welcome To Brazil");
        break;
    case "USA":
        console.log("Welcome To America");
        break;
    case "Ca":
        console.log("Welcome To Canada");
        break;
    default:
        console.log("Thank you for waiting");
}
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Loops
//==========================================
console.log("=== For Loop (0 to 10) ===");
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("\n" + "-".repeat(30) + "\n");

console.log("=== For Loop (10 to 1) ===");
for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("\n" + "-".repeat(30) + "\n");

console.log("=== Nested For Loop ===");
for (var i = 0; i <= 5; i++) {
    console.log("i = ", i);
    for (var k = 0; k < 3; k++) {
        console.log('k = ', k);
    }
    console.log("--- End of i = " + i + " ---");
}
console.log("\n" + "=".repeat(50) + "\n");

console.log("=== While Loop ===");
var n = 0;
while (n <= 5) {
    console.log(n);
    n++;
}
console.log("\n" + "-".repeat(30) + "\n");

console.log("=== Do While Loop ===");
var j = 5;
do {
    console.log(j);
    j++;
} while (j <= 6);
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Loop Control
//==========================================
console.log("=== Loop Control - Break ===");
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) break;
}

console.log("=== Loop Control - Continue ===");
for (var i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

console.log("=== Loop Control - Label ===");
mainFor: for (var i = 0; i < 5; i++) {
    console.log("I = ", i);
    nestedFor: for (var n = 0; n < 3; n++) {
        console.log("N = ", n);
        if (n == 1) break mainFor;
    }
}
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Arrays
//==========================================
console.log("=== Arrays & Nested Arrays ===");
let array = ["Mohamed", "Ahmed", 1, false, [1, 5, 6], "Basma"];
console.log(array);
console.log(array[3]);        // false
array[3] = "Mohamed";         // change the value
console.log(array);
console.log(array[4][0]);     // 1
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Array Methods
//==========================================
console.log("=== Array Methods ===");
let arr = [1, 2, 3];
console.log(Array.isArray(arr));        // true

let arr2 = [false, 4, 7, ["Mohamed", 4, true]];
console.log(arr2.length);               // 4
console.log(arr2[3].length);            // 3

arr.push(4);
console.log(arr);                       // [1, 2, 3, 4]
arr.pop();
console.log(arr);                       // [1, 2, 3]

let arrays = ["string", false, {}];
arrays.unshift(0, 1, true);
console.log(arrays);                    // [0, 1, true, "string", false, {}]
arrays.shift();
console.log(arrays);                    // [1, true, "string", false, {}]

let tests = ["Ahmed", "Omar", "Wael", "Ahmed", "Ahmed"];
console.log(tests.includes("Omar"));    // true
console.log(tests.indexOf("Ahmed"));    // 0
console.log(tests.lastIndexOf("Ahmed"));// 4

tests.splice(2, 1, "Mohamed");
console.log(tests);                     // ["Ahmed", "Omar", "Mohamed", "Ahmed", "Ahmed"]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2));     // [1, 2, 3, 4, 5, 6]
console.log(array1.join());             // "1,2,3"
console.log(array1.join(" "));          // "1 2 3"
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Objects
//==========================================
console.log("=== Object Introduction ===");
var user = {
    // Properties
    name: "Mohamed",
    age: 30,
    password: 123456,
    
    // Methods
    getPassword: function() {
        console.log(this.password);
    }
};

console.log(user.name);
user.getPassword();

// Accessing object properties
var variable = "country";
var object = {
    name: "Omar",
    age: 30,
    country: "Egypt"
};

console.log(object[variable]);          // "Egypt"
console.log(object.name);               // "Omar"

// Nested objects
var nestedObject = {
    name: "Omar",
    age: 30,
    isMarried: true,
    hasChildren: true,
    children: ["Ahmed", "Mohamed", "Sayed"],
    
    nested: {
        first: 1,
        second: 2,
        third: 3
    }
};

console.log(nestedObject.nested.first); // 1

// Using new Object()
var object2 = new Object({
    name: "Israa",
    age: 20,
    isMarried: false
});
console.log(object2);
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              This Keyword
//==========================================
console.log("=== This Keyword ===");
var globalAge = 50;

var objectWithThis = {
    age: 100,
    getAge: function() {
        console.log(this.age);          // refers to object's age
    },
    getGlobalAge: function() {
        console.log(globalAge);         // refers to global age
    }
};

objectWithThis.getAge();               // 100
objectWithThis.getGlobalAge();         // 50
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Functions
//==========================================
console.log("=== Functions ===");
function isTall(name) {
    if (name.length > 6) {
        console.log("String is tall");
    } else {
        console.log("String is short");
    }
}

isTall("Mohamed");      // String is tall
isTall("Ahmed");        // String is short

function sayHello(name) {
    return "Hello " + name;
}

if (sayHello("Mohamed") == "Hello Mohamed") {
    console.log("Yes");
} else {
    console.log("No");
}

// Rest parameters
function welcome(name, age, ...values) {
    console.log("Name: " + name + ", Age: " + age);
    console.log("Other values:", ...values);
}

welcome("Mohamed", 21, "Ahmed", false, {}, [], 5);

function addition(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(addition(3, 3, 3));        // 9
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Function Practice
//==========================================
console.log("=== Function Practice ===");
function sum(a = 0, b = 0, c = 0, ...rest) {
    let result = Number(a) + Number(b) + Number(c);
    for (var i = 0; i < rest.length; i++) {
        result = result + rest[i];
    }
    return result;
}

console.log(sum("1", 2, 3, 4, 5));     // 15

// Nested Function
function parent() {
    function nested() {
        return "Hi From Nested";
    }
    
    console.log(nested());
    return "Hi From Parent";
}

console.log(parent());
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Arrow Functions
//==========================================
console.log("=== Arrow Functions ===");
let sayWelcome = (name) => {
    return "Welcome " + name;
};

console.log(sayWelcome("Mohamed"));

let sums = (a, b) => a + b;
console.log(sums(1, 2));               // 3
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Higher Order Functions
//==========================================
console.log("=== Higher Order Functions ===");

// Map
let numbers = [1, 2, 3, 4, 5];
let mapResult = numbers.map(function(value, index) {
    return value * 2;
});
console.log("Map result:", mapResult);  // [2, 4, 6, 8, 10]

// Filter
let names = ["Mohamed", "Ahmed", "Tarak", "Basma", "Israa", "Malak"];
let filterResult = names.filter((value) => {
    return value.length > 6;
});
console.log("Filter result:", filterResult); // ["Mohamed"]

// Reduce
var arr3 = [1, 2, 3, 4, 5];
var reduceResult = arr3.reduce(function(prevValue, currentValue, index) {
    console.log("Prev:", prevValue, "Current:", currentValue, "Index:", index);
    return prevValue + currentValue;
});
console.log("Reduce result:", reduceResult); // 15

var reduceResult2 = arr3.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
}, 15);
console.log("Reduce with initial value:", reduceResult2); // 30
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Set
//==========================================
console.log("=== Set Introduction ===");
var arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 5];
console.log("Array:", arrayWithDuplicates);

var sets = new Set([1, 2, 3, 4, 4, 5, 5]);
console.log("Set:", sets);              // Set removes duplicates
console.log("Set[0]:", sets[0]);        // undefined (can't access by index)

// Set methods
sets.add(6);
console.log("After add(6):", sets);
console.log("Has 3:", sets.has(3));     // true
console.log("Size:", sets.size);        // 6
sets.delete(6);
console.log("After delete(6):", sets);
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Map
//==========================================
console.log("=== Map Introduction ===");
var person = {
    name: "Mohamed",
    age: 30,
    country: "Egypt"
};
console.log("Object:", person);

// Map can use any data type as keys
var personMap = new Map();
personMap.set("name", "Mohamed");
personMap.set(true, 30);
personMap.set("country", "Egypt");
personMap.set(1, 2);

console.log("Map:");
personMap.forEach((value, key) => {
    console.log(key, ":", value);
});
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              OOP - Classes
//==========================================
console.log("=== Object Oriented Programming ===");

class User {
    constructor(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
    
    getPassword() {
        return this.password;
    }
    
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

let user1 = new User("Mohamed", 123, "mohamed@example.com");
let user2 = new User("Ahmed", 456, "ahmed@example.com");
let user3 = new User("Hany", 789, "hany@example.com");

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());
console.log("User1 password:", user1.getPassword());
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Inheritance
//==========================================
console.log("=== Inheritance ===");

class Parent {
    constructor(name, id, password) {
        this.name = name;
        this.id = id;
        this.password = password;
    }
    
    getID() {
        return `Your ID is: ${this.id}`;
    }
    
    getInfo() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

class Child extends Parent {
    constructor(name, id, password, age) {
        super(name, id, password);  // Call parent constructor
        this.age = age;
    }
    
    getAge() {
        return `Your age is: ${this.age}`;
    }
    
    getFullInfo() {
        return `${this.getInfo()}, Age: ${this.age}`;
    }
}

var parent = new Parent("Youssef", 1, 15432);
var child = new Child("Fady", 2, 43156, 20);

console.log("Parent info:", parent.getInfo());
console.log("Parent ID:", parent.getID());
console.log("Child info:", child.getFullInfo());
console.log("Child age:", child.getAge());
console.log("Child ID:", child.getID());   // Inherited method
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Private Properties
//==========================================
console.log("=== Private Properties ===");

class UserWithPrivate {
    // Private property (using # syntax)
    #password;
    
    constructor(id, name, password, age) {
        this.id = id;
        this.name = name;
        this.#password = password;
        this.age = age;
    }
    
    // Method to change password with validation
    changePassword(oldPass, newPass) {
        if (oldPass === this.#password) {
            this.#password = newPass;
            console.log("Password changed successfully!");
            return true;
        } else {
            console.log("Incorrect old password!");
            return false;
        }
    }
    
    // Method to get user info (password is hidden)
    getInfo() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            // password is not accessible from outside
        };
    }
    
    // Method to verify password
    verifyPassword(password) {
        return password === this.#password;
    }
}

// Create a new user
var user5 = new UserWithPrivate(1, "Mohamed", 123, 19);

console.log("User Info:", user5.getInfo());

// Try to access private property directly (will be undefined)
console.log("Direct password access:", user5.password);     // undefined

// Use proper methods to interact with password
console.log("Password verification (correct):", user5.verifyPassword(123));    // true
console.log("Password verification (wrong):", user5.verifyPassword(456));      // false

// Change password using the proper method
user5.changePassword(123, 456);     // Password changed successfully!
user5.changePassword(123, 789);     // Incorrect old password!

// Verify new password
console.log("New password verification:", user5.verifyPassword(456));          // true
console.log("\n" + "=".repeat(50) + "\n");

//==========================================
//              Object Meta Data
//==========================================
console.log("=== Object Meta Data ===");

var object = {
    name: "Mohamed",
    age: 30,
};

Object.defineProperty(object, "country", {
    writable: true,      // Controls if the property value can be changed
    enumerable: true,    // Controls if the property shows up in for...in loops and Object.keys()
    configurable: true,  // Controls if the property can be deleted or its attributes changed
    value: "Egypt",      // The actual value of the property
});

console.log("Can delete:", delete object.country);  // true (can delete because configurable: true)

console.log(object);

console.log("\n" + "=".repeat(50) + "\n");
console.log("🎉 JavaScript Tutorial Complete! 🎉");