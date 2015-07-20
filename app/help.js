var fs = require('fs'); //file system, needs to be required. part of node but not baked in

function printHelpMessage() {
    var options = {
      encoding: 'utf8'
    };
    var message = fs.readFile('./app/helpmessage.txt', options);
    //need ./app/ because node read from where you are
    //running node from, not from where the file sits
    console.log(message);
    // process.stdout.write(message);
  }
  //makes this available outside of this file
module.exports = function () {
    printHelpMessage();
    process.exit(1);
  }
  //in general move module exports to bottom of file
