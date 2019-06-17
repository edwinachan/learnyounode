/*

https://github.com/workshopper/learnyounode/blob/master/exercises/make_it_modular/problem.md

*/

//program.js

var ext = process.argv[3]
var folder = process.argv[2]

var mymodule = require('./mymodule.js')
mymodule(folder, ext, function (err, list) {
        if (err) {
                console.log('There was an error')
        } else {
                list.forEach(function(item) {
                        console.log(item)
                }) //end forEach
        } //end if
}) //end function call


//mymodule.js

var path = require('path')
var ext = process.argv[3]
var folder = process.argv[2]
var fs = require('fs')


module.exports = function (folder, ext, callback) {
	
	fs.readdir(folder, function (err, list) {
		if (err) {
			return callback(err)
		}

		var validFiles = []		

		for (i=0; i < list.length; i++) {
			if (path.extname(list[i]) === ('.' + ext)) {
			validFiles.push(list[i])
			} //end if
		} //end for
	
		callback(null, validFiles)
		
		}) //end readdir
	} //end directoryFilter function


//Official solution:

//program.js

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })


//mymodule.js

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
