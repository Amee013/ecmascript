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
  

  function sumOne(a,b) {
    return a+b;
  }

  var myA = [5,4,2,3];
  console.log(sumOne(...myA));

function sumAndMulti( a , b , ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  
  for( arg of args) {
    sum += args;
  }
  return ["Sum : " +sum , "Multi : " +multi];
}

console.log(sumAndMulti(2,3,1,2,4));