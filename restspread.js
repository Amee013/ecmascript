// rest and spread operator 

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  console.log(sum(1, 2, "amee")); 
  console.log(sum(4, 5, 6, 7));
  