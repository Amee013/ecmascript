
// Array Helpers Methods

// 1. foreach() method
// 2. map()
// 3. filter 
// 4. every
// 5. some
// 6. find 
// 7. reduce
// 8.findIndex
// 9.sort
// 10.concate



// 1. foreach() method - provide function for each element 

const numbers4 = [10,20,30,40];

console.log("foeEach() method : ")

numbers.forEach(consoleItem);
console.log("-------------------")
numbers.forEach(consoleIndex);
console.log("-------------------")
numbers.forEach(consoleArray);

function consoleItem(item , index , arr) {
    console.log(item);
}

function consoleIndex(item , index , arr) {
    console.log('a[' + index + '] = ' + item );
}

function consoleArray(item , index , arr) {
    console.log(arr);
}

console.log("-------------------")


//using arrow function

numbers.forEach((item,index,arr) => {
    console.log('a[' + index + '] = ' + item );
});

console.log("-------------------")

//sum 

let sum = 0;

numbers.forEach(item => {
    sum += item;
});

console.log("Sum = " +sum);

console.log("-------------------")

// //letters 

const letters = ['a','b','c','a','a','b','c','d']

let count = {};

letters.forEach(item => {
    if(count[item]) {
        count[item]++;
    }
    else
    {
        count[item] = 1;
    }
});

console.log(count);

console.log("-------------------")


// 2.map() method - 

console.log("Map() method : ")

const number = [1, 2, 3, 4];
const doubled = number.map(num => num * 2);
console.log(doubled);


console.log("-------------------")

// //worst case: 

// //1.large array 
const largeArray = Array(1e6).fill(7);
// Now largeArray is [1, 1, 1, ..., 1] (1,000,000 times)
const result6 = largeArray.map(num => num * 2); // O(n)

console.log(result6);

// /// expensive call back function

const numbers2 = [1, 2, 3, 4, 5];
const result5 = numbers.map(num => {
  // Simulate an expensive operation
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
}); // O(n * m) where m is the time complexity of the expensive operation

console.log(result5);

// //complex data structure 

const complexArray = [
    { value: 1, data: Array(1e3).fill(0) },
    { value: 2, data: Array(1e3).fill(0) },
    { value: 3, data: Array(1e3).fill(0) },
  ];

const result4 = complexArray.map(obj => {
    // Process the complex data structure
    obj.data.forEach(item => {});
    return obj.value * 2;
}); // O(n * k) where k is the complexity of processing each complex element
  
  console.log(result4);

// //nested array 

const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const result3= nestedArray.map(innerArray => {
    return innerArray.map(num => num * 2);
  }); // O(n * m) where m is the size of inner arrays
  
  console.log(result3);


// // 3.filter() method - 

console.log("filter() method : ")

const n = [1, 2, 3, 4, 5];
const even = n.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

//all elements pass condition
// no element pass condition'


console.log("-------------------")

// // 4.find() method 

console.log("find() method : ")

var users = [
    {name:'amee' , age:20},
    {name:'bhakti' , age:15},
    {name:'hemi' , age:22},
    {name:'urva' , age:15},
]

var founduser;

founduser = users.find( function(user) {
    return user.age == 15; 
})

console.log(founduser);

console.log("-------------------")

// //element not found

const numbers1 = [1, 2, 3, 4, 5];
const result2 = numbers.find(num => num > 5); // undefined
// O(n)
console.log(result2);

// //large array with searched element at last 
// const largeArray = Array.from({ length: 1e6 }, (_, i) => i + 1);
// const result1 = largeArray.find(num => num === 1e6);
// // O(n)
// console.log(result1);

// 5. every() method and 6. some() method 

console.log("every() method : and Some() method : ");

var isAllUserAboveTwenty = true;
var someUserAboveTwenty = false;

isAllUserAboveTwenty = users.every(function(user) {
    return user.age > 20;
})

someUserAboveTwenty = users.some(function(user) {
    return user.age > 20;
})

console.log(isAllUserAboveTwenty);
console.log(someUserAboveTwenty);

console.log("-------------------")

// //every = worst 
// //all element satisfy the condition

const numbers = [1, 2, 7 , 4, 5];
const result = numbers.every(num => num < 10); // true
// O(n)

console.log(result);

//some = worst 
//no element satisfy the condition


const result1 = numbers.every(num => num > 10); // true
// O(n)

console.log(result1);


// // 7. reduce() method 

console.log("reduce() method : ")

var num = [1,2,3,4,5];

var add = 0;

add = num.reduce( (accumulator, current) => accumulator + current , 5); //5 = initial value 

console.log("sum = " +add); 

console.log("-------------------")

// 8. findIndex() method 

console.log("findIndex() method : ")

const index = num.findIndex(num => num % 2 === 0);
console.log("index of even number =  " +index); 

console.log("-------------------")

// // 9. sort() method 


console.log("sort() method : ")

const a = [4, 2, 5, 1, 3];
a.sort((a, b) => a - b);
console.log("sorted array : "+a); // [1, 2, 3, 4, 5]

console.log("-------------------")

//////Sorting an Already Sorted Array with a Non-Optimized Algorithm
///////Sorting a Reversed Array

// //10 . concate() method 

console.log("concate() method : ")

const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log("combined array : " +combined); // [1, 2, 3, 4]