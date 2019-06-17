/*

https://github.com/workshopper/learnyounode/blob/master/exercises/filtered_ls/problem.md

*/

var fs = require('fs')
var filfeStrings;
var path = require('path')
var ext = '.' +  process.argv[3]
fs.readdir(process.argv[2],  function (err, list) {
	if (err) {
		return console.log(err)
	}

	fileStrings = list;

	var validFiles = [];

	for (i=0; i < fileStrings.length; i++) {

		if (path.extname(fileStrings[i]) === (ext)) {
		validFiles.push(fileStrings[i] + '\n')	

		} //end if
	} //end for


	
	console.log(validFiles.join(''))
} )


//Official solution: 

var fs = require('fs')
var path = require('path')
    
var folder = process.argv[2]
var ext = '.' + process.argv[3]
    
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  
  files.forEach(function (file) {
     if (path.extname(file) === ext) {
        console.log(file)
      }
   })
 })
