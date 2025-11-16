let greetings: string = "Hello Panda";

let mynum = 10; 
greetings.toLocaleLowerCase()

console.log(greetings);

/* 
                Number
Represents both integers and floating-point numbers.

TypeScript uses the same number type for all numeric values.
*/

let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);


/* 
                 Boolen 
Represents true/false values.

Used for flags, toggles, and conditions.
*/

let isLoggedIn:  boolean = true; 
console.log(isLoggedIn);
let hasPermission = false;
console.log(hasPermission);


// String 
/*
Represents text data.
Can use single quotes ('), double quotes ("), or backticks (`) for template literals.
*/

let color: string = "blue";
let fullName: string = 'Kaif Ansari';
let age: number = 19;
let sectence: string = `Hello, My name is ${fullName} and I'll be ${age +1} next Year`;
// console.log(color);
// console.log(fullName);
// console.log(age);
console.log(sectence);

/* 
                BigInt (ES2020+)
Represents whole numbers larger than 253 - 1.

Use the n suffix to create a bigint.
*/

const bigNumber: bigint = 900719925470991n;
const hugeNumber = BigInt(900719925470991); // Alternative Syntax

console.log(bigNumber);
console.log(hugeNumber);


/*
                Symbol
Creates unique identifiers.

Useful for creating unique property keys and constants.
*/ 

const uniqueKey: symbol = Symbol('Kaif is hot')
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // This is a unique property"

export{}

