//https://github.com/workshopper/learnyounode/blob/master/exercises/http_collect/problem.md

var bl = require('bl')

var url = process.argv[2]

var http = require('http')

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        console.log(str.length)
        console.log(str)
    }))

    response.on('error', function(err) {
        req.end()
    })

    response.on('end', function() {
    })
})

//Official solution:

var http = require('http')
var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
