/// var vs let vs const vs static 

/// var - function scoped
/// let - blocked scoped
/// const - blocked scoped 
/// static - used in classes 

// var 

console.log("var keyword : ")

var a = 5;
var a = 15;
var c = 'amee';

{
    var c = 'this';
    console.log(c);
}
console.log(c);

function example() {
    console.log(a); // undefined due to hoisting
    var a = 10;
    console.log(a); // 10
    
}
example();
console.log(a);


console.log("------------------------")
  

// let

console.log("let keyword : ")

let x = 14;
 x=13;
let b = 'amee';

{
    let b = 'this';
    console.log(b);
}
console.log(b)

function example() {
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // 10
  }

console.log(x);
example();

console.log("------------------------")


// const 

console.log("const keyword : ")


const y = 10;
// y = 20; // TypeError: Assignment to constant variable.

const obj = { a: 1 };
obj.a = 2; // Allowed
console.log(obj.a); // 2



console.log("------------------------")

// static 

console.log("static keyword : ")

class Example {
    static staticMethod() {
      return 'This is a static method';
    }
  }
  
  console.log(Example.staticMethod()); // 'This is a static method'
  
  //const instance = new Example();
  //console.log(instance.staticMethod()); // TypeError: instance.staticMethod is not a function
  
