// rest and spread operator 

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  console.log(sum(1, 2, "amee")); 
  console.log(sum(4, 5, 6, 7));
  

  function fullName(firstName, lastName, ...titles) {
    return `${firstName} ${lastName}, ${titles.join(', ')}`;
  }
  
  console.log(fullName('John', 'Doe', 'PhD', 23)); // "John Doe, PhD, MSc"
  

  

function sumAndMulti( a , b , ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  
  for(const arg of args) {
    sum += arg;
  }
  return ["Sum : " +sum , "Multi : " +multi];
}

console.log(sumAndMulti(2,3,1,2,4));

///========================================================================


//------- Rest ----------------------------- 

//Default Parameters with Rest Parameters

function example(a, b = 2, ...rest) {
  console.log(a);  // First argument
  console.log(b);  // Second argument or default
  console.log(rest);  // Remaining arguments
}

example(1);          // 1, 2, []
example(1, 3);       // 1, 3, []
example(1, 3, 4, 5); // 1, 3, [4, 5]


//Array Destructuring:

const [first, ...rest] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4]

//Object Destructuring:
const { a, b, ...rest1 } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);    // 1
console.log(b);    // 2
console.log(rest1); // { c: 3, d: 4 }


// Function Composition

function compose(...functions) {
  return function (initialValue) {
    return functions.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

const addOne = x => x + 1;
const double = x => x * 2;

const composed = compose(addOne, double);
console.log(composed(5)); // 11 (double first, then add one)


//------- Spread ----------------------------- 

function sumOne(a,b) {
  return a+b;
}

var myA = [5,4,2,2,2,2];
console.log(sumOne(...myA));

//array copy 

const originalArray = [1, 2, 3 ,5];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copiedArray);   // [1, 2, 3, 4]

//object copy

const originalObject = { a: 1, b: { c: 2 } };
const copiedObject = { ...originalObject };
copiedObject.b.c = 3;
console.log(originalObject); // { a: 1, b: { c: 3 } } // because they share the same nested object b.
console.log(copiedObject);   // { a: 1, b: { c: 3 } }

//merging array 

const arr1 = [1, "anxv"];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4]


//merging objects 

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 3, c: 4 }


/// spreading iterables 

//string to array 

const str = "hell o";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

//set to array 

const set = new Set([1, 2, 3, 'as', 'et', 'ki']);
const arrayFromSet = [...set];
console.log(arrayFromSet); // [1, 2, 3]

//function augmented spreading 

function add(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // 6


// combining rest and spread 

function example(first, ...rest) {
  console.log(first); // First argument
  console.log(rest); //rest
  console.log(...rest); // Remaining arguments expanded //spread
}

example(1,2,"amee"); // 1, 2 3 4

/// limitations 

// Rest Operator Limitations

// Position Constraint:

// function incorrectRest(a, ...rest, b) {
//   // SyntaxError: Rest parameter must be last formal parameter
// }

//Cannot be Used in Object Literals:

// const { ...rest, a } = { a: 1, b: 2 }; 
// // SyntaxError: Unexpected token ...

// Non-iterable Inputs:
// const [a, ...rest] = null; 
// TypeError: null is not iterable

//Spread Operator Limitations

//Shallow Copy:

const obj3 = { a: 1, nested: { b: 2 } };
const obj4 = { ...obj3 };

obj4.nested.b = 3;

console.log(obj3.nested.b); // 3

// Spread Syntax Position:

const numbers5 = [1, 2, 3];
console.log(Math.max(...numbers5, 0)); 

// Non-iterable Inputs:

// const obj = { a: 1, b: 2 };
// const arr = [...obj]; 
// // TypeError: obj is not iterable

// Redundant Properties in Objects:

const obj5 = { a: 1, b: 2 };
const obj6 = { b: 3, c: 4 };
const combined = { ...obj5, ...obj6 };

console.log(combined); // { a: 1, b: 3, c: 4 }

//Combining Rest and Spread with Other Features

//Using Rest with Default Parameters:

function foo(a = 1, ...rest) {
  console.log(a, rest);
}

foo(); // 1 []


//Spread with Non-primitive Properties:

const obj7 = { a: 1, b: { c: 2 } };
const obj8 = { ...obj1, b: { d: 3 } };

console.log(obj8); // { a: 1, b: { d: 3 } }
