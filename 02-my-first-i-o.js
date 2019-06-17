/*

https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_io/problem.md

*/

var fs = require('fs') //load in the fs module
var path = process.argv[2] //the full path to the file will be provided as the first command line argument
var buf = fs.readFileSync(path) //read in file from path. This returns a Buffer object > Node’s way of efficiently representing arbitrary arrays of data (e.g. ascii, binary). They can be converted to strings by calling toString()
var str = buf.toString() 
var split = str.split('\n')
var splitLength = split.length -1
console.log(splitLength)


//Official solution:

var fs = require('fs')
    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
