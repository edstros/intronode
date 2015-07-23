#!/usr/bin/env node
var fs = require('fs'); //file system, needs to be required. part of node but not baked in

var argv = require('yargs').argv; //takes what's inthe yargs object and apply the argv property
//can also do it this way: var name = argv.name || "World";
var prompt = require('prompt');
var help = require('./app/help');
var zipFile = require ('./app/zipFile');
//var csv = require ('./app/csvToJson');

if (argv.help) {
  help();//all was extractedto help.js
}
if (argv.file) {
  zipFile(argv.file);//if someone wants to compress a file
}
if (argv.csv) {
  csvToJson(argv.csv);
}
prompt.override = argv;
prompt.message = prompt.delimeter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);

});

function printHelloMessage(name) {
  console.log('Hello, ' + name + '!');
    var options = {
      encoding: 'utf8'
    };
    var stream = fs.createReadStream('./app/helpmessage.txt', options);// can call any file as long as there is a path
    //need ./app/ because node read from where you are
    //running node from, not from where the file sits
  stream.pipe(process.stdout);
  //console.log(contents);
    // process.stdout.write(message);

  process.stdout.write('Hello ' + name + ' Again!\n'); //more direct way to write to the console;

}
//create a readstream
//pipe to module
//convert to json
