'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    main();
});



/*
 * Complete the 'uniqueWords' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 */

function uniqueWords(inputString) {
    const words = {}
    const allWordsList = inputString.split(" ")
    
    const reducer = function (acc, word) {
        
        if (acc[word]) {
            acc[word] += 1
        } else {
            acc[word] = 1
        }

        return acc
    }
    return Object.keys(allWordsList.reduce(reducer, words)).sort()

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const result = uniqueWords(inputString);

  ws.write(result.join('\n') + '\n');

  ws.end();
}