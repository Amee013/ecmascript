
//// Template literals 


//basic syntax 

//es5

console.log("es5 ");
console.log("my name is " + "amee");

//es6
console.log("es6 ");
console.log('my name is amee');

const string = `This is a template literal.`;

console.log('----------------------')

//embedding expression 

console.log('Embedding expression : ')

const name = 'John';
const age = 30;

console.log("es5 ");
console.log("Hello , my name is " +name + " and I am" +age + " years old.");

console.log("es6 ");
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); 

console.log('----------------------')

//tagged templates 

console.log('tagged templates ')

function tag(strings, ...values) {
    console.log(strings); // ["Hello, ", " is ", " years old."]
    console.log(values);  // ["John", 30]
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}`;
  }
  
 
  const taggedString = tag`Hello, ${name} is ${age} years old.`;
  console.log(taggedString); 
  

console.log('----------------------')

// multi line string 

console.log("Multi line String : ")

const multiLineString = `This is a
multi-line
string.`;
console.log(multiLineString);

console.log('----------------------')

//nesting template literals 

console.log('Nested template literals : ')

const nested = `The result is: ${`Value is ${10 * 2}`}`;
console.log(nested); 


const quantity = 5;
const pricePerUnit = 20;
const total = `Total price is $${quantity * pricePerUnit}`;
const message = `The ${total} for ${quantity} units at $${pricePerUnit} each.`;
console.log(message); 

const complexString = `Path: C:\\Users\\Username\\Documents\\file.txt
URL: https://www.example.com/path/to/resource
Quote: "It's a wonderful day!"
Single backslash: \\
Double backslash: \\\\
Forward slash: /
`;
console.log(complexString);
// Output:
// Path: C:\Users\Username\Documents\file.txt
// URL: https://www.example.com/path/to/resource
// Quote: "It's a wonderful day!"
// Single backslash: \
// Double backslash: \\
// Forward slash: /

const escaped = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(escaped); // This is a backtick: ` and this is a dollar sign: $'

const a = `
backslash: \\\\\\\\\\
Forward slash: /////
`;

console.log(a);

const b = '"/"';
console.log(b);

