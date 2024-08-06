
// Fetch api 

// let p = fetch('https://api.restful-api.dev/objects');

// p.then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// }).then ((data) => {
//     console.log(data);
// })

//basic usage

// fetch('https://api.restful-api.dev/objects')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

// handling differenet type of response 

fetch('https://api.restful-api.dev/objects')
  .then(response => {
    if (response.ok) {
    //   return response.json(); // For JSON response
    //    return response.text(); // For text response
      return response.blob(); // For blob response
    } else {
      throw new Error('Network response was not ok ' + response.statusText);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

// making post request 

fetch('https://api.restful-api.dev/objects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Samsung M12',
      data: {
        Color: 'Black',
        Capacity: '64 GB'
      }
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


// using async and await 

// async function fetchData() {
//     try {
//       const response = await fetch('https://api.restful-api.dev/objects');
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//     }
//   }
  
//   fetchData();

// handling time out 

// function fetchWithTimeout(url, options, timeout = 5000) {
//     return Promise.race([
//       fetch(url, options),
//       new Promise((_, reject) => 
//         setTimeout(() => reject(new Error('Request timed out')), timeout)
//       )
//     ]);
//   }
  
//   fetchWithTimeout('https://api.restful-api.dev/objects')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('There has been a problem with your fetch operation:', error);
//     });
  
// abort requests 

const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.restful-api.dev/objects', { signal })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('There has been a problem with your fetch operation:', error);
    }
  });

// Abort the request after 5 seconds
setTimeout(() => controller.abort(), 5000);


// all options 

fetch('https://api.restful-api.dev/objects', {
    method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'secret code or token'
    },
    credentials: 'include', // 'same-origin', 'omit'
    mode: 'cors', // 'no-cors', 'same-origin'
    cache: 'no-cache', // 'default', 'reload', 'force-cache', 'only-if-cached'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  

  
  
  

