
// Array Helpers Methods

// 1. foreach() method

const numbers = [10,20,30,40];

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
