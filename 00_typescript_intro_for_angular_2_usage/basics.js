// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName;
userName = "Max";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Max",
    age: 32,
};
// person = {
//     isEmployee: true;
// }
var people;
people = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Jane",
        age: 25,
    },
    {
        name: "Alice",
        age: 28,
    },
];
console.log(people);
// Type Inference
var course = "React - The Complete Guide";
// course = 12341;
var courseOne = "React - The Complete Guide";
courseOne = 12341;
var nameOfUser;
userName = "Mark";
var user;
user = {
    name: "Jack",
    age: 20,
};
var customer;
customer = [
    {
        name: "Erik",
        age: 20,
    },
    {
        name: "Jones",
        age: 25,
    },
    {
        name: "Jane",
        age: 28,
    },
    {
        name: "Alice",
        age: 21,
    },
];
console.log(customer);
// Functions & Types
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
// function print(value: any) {
//   console.log(value);
// }
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
var stringArray = insertAtBeginning(["a", "b", "c", "d"], "d");
console.log(stringArray);
console.log(updatedArray);
