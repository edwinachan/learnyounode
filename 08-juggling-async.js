//https://github.com/workshopper/learnyounode/blob/master/exercises/juggling_async/problem.md

var bl = require('bl');
var http = require('http');
var count = 2;
 
function readURL(count) {
 
    http.get(process.argv[count], function callback(response) {
    
        response.pipe(bl(function (err, data) {
            if(err) {
                console.log(err);
                } else {
                    console.log(data.toString());
                    if (count <= 3) {
                        readURL(count + 1);
                    }       
                }
            }));
        
        });
    }
 
readURL(count);

//Official solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

