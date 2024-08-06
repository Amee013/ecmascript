/// Destructuring 

// Array destructuring

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// skipping values

const number = [1, 2, 3, 4, 5];

const [first, , third] = numbers;

console.log(first , third ); // 1 3 

//default values 

const num = [1];

const [s, p = 10] = num;

console.log(s); // 1
console.log(p); // 10

// rest operators 

const [start, second, ...rest] = number;

console.log(start); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// object destructuring 

const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
  };
  
  const { name, age, city } = person;
  
  console.log(name); // Alice
  console.log(age); // 25
  console.log(city); // Wonderland

  // default value 

  const person1 = {
    name1: 'Alice',
    age1: 25
  };
  
  const { name1, age1, city1 = 'Unknown' } = person1;
  
  console.log(name1); // Alice
  console.log(age1); // 25
  console.log(city1); // Unknown

  // renaming variable

  const person2 = {
    name2: 'Alice',
    age2: 25
  };
  
  const { name2: personName, age2: personAge } = person2;
  
  console.log(personName); // Alice
  console.log(personAge); // 25

  // Dynamic Property Names

  const key = 'age';
const person5 = {
  name: 'Alice',
  age: 25
};

const { [key]: personAge2 } = person;

console.log(personAge2); // 25
  
// nested destructuring 


//nested objects
const person3 = {
    name3: 'Alice',
    address3: {
      city3: 'Wonderland',
      zip3: 12345
    }
  };
  
  const { name3, address3: { city3, zip3 } } = person3;
  
  console.log(name3); // Alice
  console.log(city3); // Wonderland
  console.log(zip3); // 12345


//nested array 
const numbers1 = [1, [2, 3], 4];

const [a1, [b1, c1], d1] = numbers1;

console.log(a1); // 1
console.log(b1); // 2
console.log(c1); // 3
console.log(d1); // 4


/// combined array and object destructuring 
  
const data = {
    title: 'Engineer',
    skills: ['JavaScript', 'React', 'Node.js' , '.net'] ,
    details: {
      nm: 'Alice',
      ag: 25
    }
  };
  
  const {
    title,
    skills: [primarySkill, ...otherSkills],
    details: { nm, ag }
  } = data;
  
  console.log(title); // Engineer
  console.log(primarySkill); // JavaScript
  console.log(otherSkills); // ['React', 'Node.js']
  console.log(nm); // Alice
  console.log(ag); // 25


//Object Destructuring in Function Parameters:

const person4 = {
  name: 'Alice',
  age: 25
};

function greet({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  

  
  greet(person4); // Hello, Alice! You are 25 years old.


//Array Destructuring in Function Parameters:

const numbersss = [1, 2];

  function sum([a, b]) {
    return a + b;
  }
  
  console.log(sum(numbersss)); // 3
  
// Practical application 

// swapping variables 

let a2 = 1;
let b2 = 2;

[a2, b2] = [b2, a2];

console.log(a2); // 2
console.log(b2); // 1

//Extracting Data from API Responses:

const response = {
    status: 200,
    data: {
      user: {
        id: 1,
        name4: 'Alice'
      }
    }
  };
  
  const { data: { user: { id, name4 } } } = response;
  
  console.log(id); // 1
  console.log(name4); // Alice
  
  
// Default Function Parameters:
  
  function createUser({ name = 'Anonymous', age = 0 } = {}) {
    return {
      name,
      age
    };
  }
  
  console.log(createUser()); // { name: 'Anonymous', age: 0 }
  console.log(createUser({ name: 'Alice' })); // { name: 'Alice', age: 0 }
  
// spreading in destructuring 

//array 

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4]

// object 

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combined2 = { ...obj1, ...obj2 };

console.log(combined2); // { a: 1, b: 2, c: 3, d: 4 }

// Default Values with Aliasing

const person6 = {
    name: 'Alice'
  };
  
  const { name: firstName, age: years = 18 } = person6;
  
  console.log(firstName); // Alice
  console.log(years);     // 18
  
// Destructuring in Loops

// array

  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  for (const { name, age } of people) {
    console.log(`${name} is ${age} years old.`);
  }
  
  // object 

  const data1 = {
    user1: { name: 'Alice', age: 25 },
    user2: { name: 'Bob', age: 30 }
  };
  
  for (const [key, { name, age }] of Object.entries(data1)) {
    console.log(`${key}: ${name} is ${age} years old.`);
  }
  
  /// limitations 

  //Non-Existent Properties:
const person7 = { name: 'Alice' };

const { address: { city5 } = {} } = person7;
// TypeError: Cannot read property 'city5' of undefined

//shallow copy 

const obj = { x: 1, y: { z: 2 } };
const { y } = obj;

y.z = 3;

console.log(obj.y.z); // 3

// Destructuring with Non-iterables

// const nonIterable = null;
// const [v] = nonIterable; // TypeError: nonIterable is not iterable

// variable shadowing 
const personn = { namee: 'Alice', agee: 25 };
const { namee, agee } = personn;

function displayPerson() {
  const { namee, agee } = { namee: 'Bob', agee: 30 };
  console.log(namee, agee); // Bob, 30
}

displayPerson();
console.log(namee, agee); // Alice, 25


//Handling Arrays with Undefined or Null Values


const array = [1, null , 3];

const [d, e , f] = array;

console.log(d, e, f); // 1, 2, 3

//Edge Cases with Object Destructuring

// const data4 = {
//     user: {
//       name: 'Alice'
//     }
//   };
  
//   const { user: { address: { city4 } } } = data4;
//   // TypeError: Cannot destructure property 'city' of 'undefined' as it is undefined.
  
// Limitations in Destructuring with Default Parameters

function foo({ a = 1, b } = {}) {
    console.log(a, b);
  }
  
  foo(); // 1, undefined
  foo({ b: 2 }); // 1, 2
  foo({}); // 1, undefined
  