// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true;
// }

let people: {
  name: string;
  age: number;
}[];

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

let course = "React - The Complete Guide";
// course = 12341;

let courseOne: string | number | boolean = "React - The Complete Guide";
courseOne = 12341;

let nameOfUser: string | string[];
userName = "Mark";

// Type Aliases

type Person = {
  name: string;
  age: number;
};

let user: Person;

user = {
  name: "Jack",
  age: 20,
};

let customer: Person[];

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

function add(a: number, b: number) {
  return a + b;
}

console.log(add(4, 5));

// function print(value: any) {
//   console.log(value);
// }

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
console.log(updatedArray);
console.log(stringArray);

// Classes

class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Adolf", "Lawrance", 24, ["Angular"]);
student.enrol("React");
// student.listCourses(); => Angular, React
// student.courses => Angular, React

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello!!!");
  }
}
