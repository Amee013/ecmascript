//// arrow function 


// this keyword in function

console.log('this keyword in normal function : ')

const user = {
    username : 'amee',
    age : '21',

    welcomeMessage : function() {
        console.log(`Hello, my name is ${this.username} and I am ${this.age} years old.`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "abc";
user.welcomeMessage();

console.log('----------------------')

console.log(this);

console.log('----------------------')

function xyz() {
    console.log(this);
}

xyz();

console.log('----------------------')

const test = function () {
    let name = "amee";
    console.log(this.username);
}

test();

console.log('----------------------')


// this keyword in arrow function

console.log('this keyword in arrow function : ')


const test1 = () => {
    let name = "amee";
    console.log(this.name);
}

test1();

console.log('----------------------')

const test2 = () => {

    console.log(this);
}

test2();

console.log('----------------------')

//arrow function with explicit return  {} + return 

const addTwo = (num1 , num2) => {
    return num1+num2;
}

console.log(addTwo(3,4));

//arrow function with implicit return () + no return 

const add = (num1,num2) => num1 + num2;
console.log(add(5,4));
const sum = (num1,num2) => (num1 + num2);
console.log(sum(9,4));

const greet = () => 'Hello, world!';
console.log(greet()); 

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log(squares); 

//lexical this and super
class MyClass {
    constructor() {
      this.name = 'MyClass';
    }
    getName = () => {
      return this.name;
    };
  }
  
  const instance = new MyClass();
  console.log(instance.getName()); // 'MyClass'

  //Array Methods

  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  
  const names = users.map(user => user.name);
  console.log(names); // ['Alice', 'Bob', 'Charlie']
  
  const adults = users.filter(user => user.age >= 30);
  console.log(adults); // [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
  
  
///limitations 

//No prototype Property

const ArrowFunction = () => {};
console.log(ArrowFunction.prototype); // undefined

//Not Suitable for Object Methods

const obj = {
    value: 42,
    getValue: function() {
      return this.value; // Correct context
    },
    getArrowValue: () => this.value // Incorrect context
  };
  
  console.log(obj.getValue()); // 42
  console.log(obj.getArrowValue()); // undefined

//No super binding 

  class Parent {
    constructor() {
      this.name = 'Parent';
    }
  }
  
  class Child extends Parent {
    constructor() {
      super();
      this.name = 'Child';
    }
  
    getName() {
      return super.name; // Works
    }
  
    getArrowName = () => super.name; // SyntaxError: 'super' keyword unexpected here
  }
  
  const ins = new Child();
  console.log(ins.getName());
  console.log(ins.getArrowName());
  