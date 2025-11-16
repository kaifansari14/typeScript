/*
                      TypesScript Special Types:-
Type: any
The any type is the most flexible type in TypeScript.

It essentially tells the compiler to skip type checking for a particular variable.

While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

When to use any:

•When migrating JavaScript code to TypeScript
•When working with dynamic content where the type is unknown
•When you need to opt out of type checking for a specific case

Example without 'any' 
*/

let u = true;
//u = "string";   // Error: Type 'string' is not assignable to type 'boolean' .
//Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// Example with 'any'

let v: any = true;
v = "string";  // no error as it can be "any" type 
Math.round(v); // no error as it can be "any" type
console.log(Math.round(v));  // output :- NaN

/*
            Type: unknown
The unknown type is a type-safe counterpart of any.

It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".

Key differences between unknown and any:

•Unknown must be type-checked before use.
•You can't access properties on an unknown type without type assertion.
•You can't call or construct values of type unknown.
*/

let w: unknown = 1;
w ="string"; // no error 
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am panda ");
    }
} as { runANonExistentMethod:() => void}

// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); 
// Error: Object is of type 'unknown'. 

if (typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function}).runANonExistentMethod();
}

// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting