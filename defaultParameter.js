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
  


  


  