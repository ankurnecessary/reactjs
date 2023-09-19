// Primitives: number, string, boolean
// More complex: objects, arrays
// Function type, parameters

let age: number = 22;

age = 20;

let username: string;

username = 'Ankur';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = { name: string, age: number };

let person: Person;

person = {
  name: 'Max'
  , age: 10
}

let people: Person[];

// Type inference

let course = "Course1"; // course variable will be automatically inferred as of type string
// course = 1;// that is why getting compilation error when assigning a number to it

// Union types

let courseName: string | number = 'Course1';
courseName = 1;


// Function and types

function add(a: number, b: number): number {
  return a + b;
}

function printout(a: any): void {
  console.log(a);
}
