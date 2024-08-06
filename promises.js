
//Promises 


/// sync and async

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//     console.log('Hello')
// },2000);  /// works in parallaly 

// console.log("four");
// console.log("five");

// call backs 

function sum ( a , b ) {
    console.log(a+b);
}

function calculator ( a , b , sumCallBack) {
    sumCallBack(a,b);
}

calculator(2,6,sum);  // don't use parannthesis in function sum 

calculator(3,6,(a,b)=>{
    console.log(a+b);
})

// const amee = () => {
//     console.log("Amee");
// };

// setTimeout(amee,2000);

// nested call backs ( call back hell )

// sync 
function getData( dataId , getNextData) {
    setTimeout (()=>{
        console.log("Data : ", dataId);
    },3000)
}

// getData(1);
// getData(2);
// getData(3);
// getData(4);
// getData(5);

// async

// function getData( dataId , getNextData) {
//     setTimeout (()=>{
//         console.log("Data : ", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     },3000)
// }

// call back hell 

// getData(1 , ()=> {
//     console.log("Getting data 2...");
//     getData(2 , ()=> {
//         console.log("Getting data 3...");
//         getData(3 , ()=> {
//             console.log("Getting data 4...");
//             getData(4 , ()=>{
//                 console.log("Getting data 5...");
//                 getData(5);
//             });
//         });
//     });
// });

// nested call back hell 

// function asyncOperation1(callback) {
//     setTimeout(() => {
//       console.log('Operation 1');
//       callback();
//     }, 1000);
//   }
  
//   function asyncOperation2(callback) {
//     setTimeout(() => {
//       console.log('Operation 2');
//       callback();
//     }, 1000);
//   }
  
//   function asyncOperation3(callback) {
//     setTimeout(() => {
//       console.log('Operation 3');
//       callback();
//     }, 1000);
//   }
  
//   asyncOperation1(() => {
//     asyncOperation2(() => {
//       asyncOperation3(() => {
//         console.log('All operations completed');
//       });
//     });
//   });

//  Avoiding Callback Hell with Named Functions

// function asyncOperation1(callback) {
//     setTimeout(() => {
//       console.log('Operation 1');
//       callback();
//     }, 1000);
//   }
  
//   function asyncOperation2(callback) {
//     setTimeout(() => {
//       console.log('Operation 2');
//       callback();
//     }, 1000);
//   }
  
//   function asyncOperation3(callback) {
//     setTimeout(() => {
//       console.log('Operation 3');
//       callback();
//     }, 1000);
//   }
  
//   function handleOperation2() {
//     asyncOperation2(handleOperation3);
//   }
  
//   function handleOperation3() {
//     asyncOperation3(() => {
//       console.log('All operations completed');
//     });
//   }
  
 // asyncOperation1(handleOperation2);
  

// waterfall pattern 

// const waterfall = (tasks, callback) => {
//     const nextTask = (index, ...args) => {
//       if (index === tasks.length) {
//         callback(null, ...args);
//       } else {
//         tasks[index](...args, (error, ...nextArgs) => {
//           if (error) {
//             callback(error);
//           } else {
//             nextTask(index + 1, ...nextArgs);
//           }
//         });
//       }
//     };
//     nextTask(0);
//   };
  
//   waterfall([
//     (callback) => {
//       setTimeout(() => {
//         console.log('Task 1');
//         callback(null, 'Result 1');
//       }, 1000);
//     },
//     (result1, callback) => {
//       setTimeout(() => {
//         console.log('Task 2, received:', result1);
//         callback(null, 'Result 2');
//       }, 1000);
//     },
//     (result2, callback) => {
//       setTimeout(() => {
//         console.log('Task 3, received:', result2);
//         callback(null, 'Result 3');
//       }, 1000);
//     }
//   ], (error, result) => {
//     if (error) {
//       console.error('Error:', error);
//     } else {
//       console.log('All tasks completed with final result:', result);
//     }
//   });


// call back limitatios 

// error handling 

// function asyncOperation1(callback) {
//     setTimeout(() => {
//       console.log('Operation 1');
//       callback(null, 'Result 1');
//     }, 1000);
//   }
  
//   function asyncOperation2(result1, callback) {
//     setTimeout(() => {
//       console.log('Operation 2, received:', result1);
//       callback(null, 'Result 2');
//     }, 1000);
//   }
  
//   function asyncOperation3(result2, callback) {
//     setTimeout(() => {
//       console.log('Operation 3, received:', result2);
//       callback(null, 'Result 3');
//     }, 1000);
//   }
  
//   function handleError(error) {
//     console.error('Error:', error);
//   }

//   asyncOperation1((error, result1) => {
//     if (error) {
//       handleError(error);
//       return;
//     }
//     asyncOperation2(result1, (error, result2) => {
//       if (error) {
//         handleError(error);
//         return;
//       }
//       asyncOperation3(result2, (error, result3) => {
//         if (error) {
//           handleError(error);
//           return;
//         }
//         console.log(result3);
//       });
//     });
//   });

// inversion of control 

//   function asyncOperation(callback) {
//   // Simulate some asynchronous code with a timeout
//   setTimeout(() => {
//     const someCondition = Math.random() > 0.5; // Random condition for demonstration
//     if (someCondition) {
//       callback(new Error('Something went wrong'));
//     } else {
//       callback(null, 'Success');
//     }
//   }, 1000);
// }

// // The control is in asyncOperation's hand, not here
// asyncOperation((error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//   }
// });

  

// proimises 

// pending status 
// let promise = new Promise((resolve , reject)=>{
//     console.log("I am a promise demo");
    
// });
// console.log(promise)

// // fulfilled status 
// let promise1 = new Promise((resolve , reject)=>{
//     console.log("I am a promise demo");
//     resolve("sucessed")
// });
// console.log(promise1)

console.log("--------------------------------")

// rejected status 
// let promise2 = new Promise((resolve , reject)=>{
//     console.log("I am a promise ");
//     reject("failed")
// });
// console.log(promise2)

// function getDataP(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: ", dataId);
//             resolve("succeeded");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 3000);
//     });
// }

// let result = getDataP(435); // Ensure you call getDataP, not getData
// console.log(result); // Logs the initial promise state which is "pending"

// // To log the promise status when it gets fulfilled or rejected
// result
//     .then((value) => {
//         console.log('Promise fulfilled with value:', value);
//     })
//     .catch((error) => {
//         console.log('Promise rejected with error:', error);
//     });


 console.log("--------------------------------")

// .then() and .catch()

// const getPromise = () => {
//     return new Promise( (resolve , reject) => {
//         console.log("I am a promise with then and catch");
//         resolve("sucess");
//         // reject("network error")
//     });
// };

// let pro = getPromise();

// pro.then((res) => {
//     console.log("Promise fulfilled : ",res);
// });

// pro.catch((err) => {
//     console.log("rejected : ",err);
// });

// pro.finally(()=>{
//     console.log("Finally block ");
// });

/// Promises without chain

function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucess");
        },4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("sucess");
        },4000);
    });
}

// console.log("Fetching data 1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("Fetching data 2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });

/// Promises with chain 

// console.log("Fetching data 1...");
// asyncFunc1().then((res) => {
//     console.log("Fetching data 2...");
//     asyncFunc2().then(() => {
//         console.log("Fetching data odd...");
//         asyncFunc1().then(() => {
//             console.log("Fetching data even...")
//             asyncFunc2().then(() => {});
//         });
//     });
// });

function getDataPc( dataId , getNextData) {
    return new Promise( (resolve , reject) => {
        setTimeout (()=>{
            console.log("Data : ", dataId);
            resolve("sucess");
        },3000)
    }); 
}

// console.log("getting data 1...");
// getDataPc(1)
//     .then((res) => {
//         console.log("getting data 2...");
//         return getDataPc(2);
//     })
//     .then((res) => {
//         console.log("getting data 3...");
//         return getDataPc(3);
//     })
//     .then((res) => {
//         console.log("getting data 4...");
//         return getDataPc(4);
//     })
//     .then((res) => {
//         console.log("getting data 5...");
//         return getDataPc(5);
//     })
//     .then((res) => {
//         console.log(res);
//     });


/// async and await 

async function hello() {
    console.log("Hey there !! ");
}

hello();
console.log(hello());

function api() {
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            console.log("weather data");
        },2000);
    });
};

async function getWeatherData() {
    await api(); //1st
}

//console.log(getWeatherData());

function getDataAS( dataId , getNextData) {
    return new Promise( (resolve , reject) => {
        setTimeout (()=>{
            console.log("Data : ", dataId);
            resolve("sucess");
        },3000)
    }); 
}

// (async function getAllData() {
//     console.log("getting data 1...");
//     await getDataAS(1);
//     console.log("getting data 2...");
//     await getDataAS(2);
//     console.log("getting data 3...");
//     await getDataAS(3);
//     console.log("getting data 4...");
//     await getDataAS(4);
//     console.log("getting data 5...");
//     await getDataAS(5);
// })(); // IIFE function 

/// ( () => {} )();  ===>>> IIFE - Imidiate invoke function expression

// chaining promises

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('First promise'), 1000);
//   });
  
//   promise3
//     .then(result => {
//       console.log(result); // 'First promise'
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Second promise'), 1000);
//       });
//     })
//     .then(result => {
//       console.log(result); // 'Second promise'
//     })
//     .catch(error => {
//       console.error(error);
//     });

// Parallel Execution with Promise.all


// const promiseA = new Promise(resolve => setTimeout(() => resolve('A'), 1000));
// const promiseB = new Promise(resolve => setTimeout(() => resolve('B'), 2000));
// const promiseC = new Promise(resolve => setTimeout(() => resolve('C'), 3000));

// Promise.all([promiseA, promiseB , promiseC])
//   .then(results => {
//     console.log(results); // ['A', 'B']
//   })
//   .catch(error => {
//     console.error(error);
//   });

//Handling the First Resolved Promise with Promise.race

// const promise4 = new Promise(resolve => setTimeout(() => resolve('Forth'), 1000));
// const promise5 = new Promise(resolve => setTimeout(() => resolve('Fifth'), 500));

// Promise.race([promise4, promise5])
//   .then(result => {
//     console.log(result); // 'Fifth'
//   })
//   .catch(error => {
//     console.error(error);
//   });


//Handling Multiple Results with Promise.allSettled

//   const promise6 = new Promise(resolve => setTimeout(() => resolve('Success'), 1000));
//   const promise7 = new Promise((_, reject) => setTimeout(() => reject('Error'), 500));
  
//   Promise.allSettled([promise6, promise7])
//     .then(results => {
//       console.log(results);
//       // [
//       //   { status: 'fulfilled', value: 'Success' },
//       //   { status: 'rejected', reason: 'Error' }
//       // ]
//     });

// promisifying 

const fs = require('fs');

// Callback-based
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Promisified
const readFilePromise = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise('file.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// Promise.any

const promises = [
    Promise.reject('Error 1'),
    Promise.reject('Error 2'),
    Promise.resolve('Success'),
    Promise.reject('Error 3')
  ];
  
  Promise.any(promises)
    .then(result => {
      console.log('First resolved value:', result); // 'Success'
    })
    .catch(error => {
      console.error('All promises rejected:', error);
    });

// Sequential Execution with reduce

    const tasks = [
        () => Promise.resolve('Task 1 completed'),
        () => Promise.resolve('Task 2 completed'),
        () => Promise.resolve('Task 3 completed')
      ];
      
      tasks.reduce((promise, task) => {
        return promise.then(result => {
          console.log(result);
          return task();
        });
      }, Promise.resolve())
        .then(finalResult => {
          console.log(finalResult); // 'Task 3 completed'
        });

// async and await 

// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//     const data = await response.json();
//     console.log(data);

//     const detailsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/7`);
//     const details = await detailsResponse.json();
//     console.log(details);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

//fetchData();

//  Running Multiple Async Operations in Parallel

// async function fetchData() {
//     const urls = [
//       'https://jsonplaceholder.typicode.com/posts/1',
//       'https://jsonplaceholder.typicode.com/posts/2',
//       'https://jsonplaceholder.typicode.com/posts/3'
//     ];
  
//     const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
  
//     try {
//       const results = await Promise.all(fetchPromises);
//       console.log(results); // Array of results from all URLs
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
 // fetchData();


  // Handling Timeouts with Promise.race
  
  async function fetchDataWithTimeout(url, timeoutMs) {
    const fetchPromise = fetch(url).then(response => response.json());
  
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    );
  
    try {
      const result = await Promise.race([fetchPromise, timeoutPromise]);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
 // fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts/3', 500);
  

//Sequential Execution of Async Functions


// FOR LOOP
async function fetchSequential(urls) {
    for (const url of urls) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  
//   fetchSequential([
//     'https://jsonplaceholder.typicode.com/posts/31',
//     'https://jsonplaceholder.typicode.com/posts/4',
//     'https://jsonplaceholder.typicode.com/posts/22'
//   ]);
  
  // reduce 
  async function fetchSequential(urls) {
    await urls.reduce(async (promise, url) => {
      await promise;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }, Promise.resolve());
  }
  
//   fetchSequential([
//     'https://jsonplaceholder.typicode.com/posts/21',
//     'https://jsonplaceholder.typicode.com/posts/23',
//     'https://jsonplaceholder.typicode.com/posts/29'
//   ]);

// Retrying Async Operations

  async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        if (i === retries - 1) {
          throw error;
        }
        console.error(`Retry ${i + 1} failed, retrying...`);
      }
    }
  }
  
//   fetchWithRetry('https://jsonplaceholder.typicode.cm/posts/9')
//     .then(data => console.log(data))
//     .catch(error => console.error('Failed after multiple retries:', error));
  


// limitations 

// Sequential Execution

async function fetchData() {
  const data1 = await fetch('https://jsonplaceholder.typicode.com/posts/21');
  const data2 = await fetch('https://jsonplaceholder.typicode.com/posts/22');
  return [data1, data2];
}

fetchData();
// The second fetch starts only after the first one completes
