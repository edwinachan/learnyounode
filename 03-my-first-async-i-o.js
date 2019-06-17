/*

https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_async_io/problem.md

*/

var fs = require('fs')
var content;
var lines;
fs.readFile(process.argv[2], 'utf8', function (err, data) {
        content = data;
        lines = content.toString().split('\n').length-1
        console.log(lines)
} )


//Official solution:

    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
