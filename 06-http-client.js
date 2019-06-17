/*

https://github.com/workshopper/learnyounode/blob/master/exercises/http_client/problem.md

*/

var path = process.argv[2]
var http = require('http')

http.get(path, function (response) {
		response.setEncoding('utf8')
		var responseData = ''
		response.on('data', function(data) {
			console.log(data)
		}) //end response.on for data

		response.on('error', function(err) {
			req.end()
		})

		response.on('end', function() {
		})
})


//Official solution:

    var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
