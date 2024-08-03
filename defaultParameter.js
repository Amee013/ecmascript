// default parameters - gives default value to a function 

console.log('Basic parameter : ')

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }
  
  console.log(greet());        
  console.log(greet('Alice')); 

console.log('------------------------------------');

console.log('Multiple default parameter : ')

function multiply(a = 1, b = 1) {
    return a * b;
  }
  
  console.log(multiply());     
console.log(multiply(5));     
  console.log(multiply(5, 2));
  
  console.log('------------------------------------');

console.log('Using Other Parameters as Default parameter : ')


function createUser(name = 'Anonymous', age = 18, isActive = true) {
    return {
      name,
      age,
      isActive
    };
}
  
console.log(createUser());              
console.log(createUser('Alice', 25));   
console.log(createUser('Bob', undefined, false)); 

console.log('------------------------------------');

console.log('Default Values with Functions : ')

function defaultAge() {
    return 21;
  }
  
  function createUser(name = 'Anonymous', age = defaultAge()) {
    return {
      name,
      age
    };
  }
  
  console.log(createUser());           
  console.log(createUser('Alice', 25)); 
  
  console.log('------------------------------------');

//evaluation order => left to right 

console.log('Evaluation order:  ')

  function example(a = 1, b = a + 1) {
    return [a, b];
  }
  
  console.log(example());     
  console.log(example(5));     
  console.log('------------------------------------');


//handling undefined 

console.log('Handling undefined : ')


  function checkValue(x = 10) {
    return x;
  }
  
  console.log(checkValue(undefined)); 
  console.log(checkValue(null));      
  console.log(checkValue(0));         
  console.log(checkValue(false));     
  console.log(checkValue(''));       
  
  console.log('------------------------------------');

  //interdependency 

console.log('interdependency : ')


  function sum(a = 0, b = a, c = a + b) {
    return a + b + c;
  }
  
  console.log(sum());       // 0 (0 + 0 + 0)
  console.log(sum(2));      // 6 (2 + 2 + 2)
  console.log(sum(2, 3));   // 10 (2 + 3 + 5)
  console.log(sum(2, 3, 4));// 9 (2 + 3 + 4)


  //object destructuring 

  function greet({ name = 'Guest', age = 18 } = {}) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  
  greet(); // Outputs: Hello, Guest. You are 18 years old.
  greet({ name: 'Alice' }); // Outputs: Hello, Alice. You are 18 years old.

  //array destructuring 

  // function sum([a = 0, b = 0, c = 0] = []) {
  //   return a + b + c;
  // }
  
  // console.log(sum([1, 2])); // Outputs: 3
  // console.log(sum()); // Outputs: 0

  //conditional defaults 

  function greet(name = 'Guest', isLoggedIn = false) {
    const greeting = isLoggedIn ? `Welcome back, ${name}!` : `Hello, ${name}. Please log in.`;
    console.log(greeting);
  }
  
  greet(); // Outputs: Hello, Guest. Please log in.
  greet('Alice', true); // Outputs: Welcome back, Alice!


  /// limitations 

  //non trivial evaluations 

  function randomValue() {
    return Math.random();
  }
  
  function example(a = randomValue()) {
    console.log(a);
  }
  
  example(); // Different output each time

  //Interaction with arguments Object

  function example2(a = 1, b = 2) {
    console.log(arguments.length); // Number of arguments actually passed
    console.log(a, b);
  }
  
  example2(10); // 1 argument, outputs 10, 2
  
  // Complex Default Values

  function example(arr = []) {
    arr.push('value');
    console.log(arr);
  }
  
  example(); // ['value']
  example(); // ['value'], not the same array instance

