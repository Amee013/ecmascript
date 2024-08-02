
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

const numbers = [10,20,30,40];

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

//letters 

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


// 2.map() method - x

console.log("Map() method : ")

const number = [1, 2, 3, 4];
const doubled = number.map(num => num * 2);
console.log(doubled);


console.log("-------------------")

// 3.filter() method - 

console.log("filter() method : ")

const n = [1, 2, 3, 4, 5];
const even = n.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

console.log("-------------------")

// 4.find() method 

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

// 7. reduce() method 

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

// 9. sort() method 


console.log("sort() method : ")

const a = [4, 2, 5, 1, 3];
a.sort((a, b) => a - b);
console.log("sorted array : "+a); // [1, 2, 3, 4, 5]

console.log("-------------------")

//10 . concate() method 

console.log("concate() method : ")

const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log("combined array : " +combined); // [1, 2, 3, 4]







