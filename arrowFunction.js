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
    console.log(this.username);
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
