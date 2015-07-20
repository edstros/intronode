#!/usr/bin/env node

var argv = require('yargs').argv; //takes what's inthe yargs object and apply the argv property
//can also do it this way: var name = argv.name || "World";
var prompt = require('prompt');
var help = require('./app/help')
if (argv.help) {
  help();//all was extractedto help.js
}
/*if (argv.name) {
  printHelloMessage(argv.name)
} else {*/

prompt.override = argv;
prompt.message = prompt.delimeter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);

});

function printHelloMessage(name) {
  console.log('Hello, ' + name + '!');

  process.stdout.write('Hello ' + name + ' Again!\n'); //more direct way to write to the console;
  //does not write new line by default
 /* process.stderr.write('OMG HELP!\n'); //standard error to console
  console.error('Help me!');
  process.exit(1); //responds to error properly and not continue a chain
  console.log(process.argv); //makes the array in the console
  console.log(argv); //this is the yargs*/
}
