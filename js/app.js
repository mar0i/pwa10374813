if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

}


// Assignment PWA Marcel 10374813



// Function to perform HTTP request
var get = function(url) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var result = xhr.responseText
                result = JSON.parse(result);
                resolve(result);
            } else {
                reject(xhr);
            }
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();

  }); 
};


get('http://college-movies.herokuapp.com/')
  .then(function(response) {
    // There is an issue with the movies being pulled from the API, so using a different one instead
    document.getElementsByClassName('targetMovies')[0] = 'json/movie.json';

  })
  .catch(function(err) {
    console.log("Error", err);
  })
  
  
  

