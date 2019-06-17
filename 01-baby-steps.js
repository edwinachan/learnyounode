/*

https://github.com/workshopper/learnyounode/blob/master/exercises/baby_steps/problem.md


Setup in terminal:

1) To create a new file:
touch program.js

2) To make a Node.js program, execute that program by running it with the node command:
node program.js

FYI: if program.js contained console.log(process.argv)

If we ran: $ node program.js 1 2 3 (the numbers are the arguments)

The output would be an array like this:

[ 'node', '/path/to/your/program.js', '1', '2', '3' ] 


*/

function sum() {
        var sum = 0
        for (i=2; i < process.argv.length; i++) {
                sum += +process.argv[i]
        }
        return sum
}

console.log(sum())

//Official solution:

    var result = 0
    
    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)
