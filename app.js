#!/usr/bin/env node
var argv = require('yargs')
  .default({
    name: 'World'
  })
  .argv; //takes what's inthe yargs object and apply the argv property
//can also do it this way: var name = argv.name || "World";
var prompt = require('prompt');

 prompt.start();


  prompt.get(['username', 'email'], function (err, result) {

    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);


  });

if (argv.help) {
  console.log('intronode:');
  console.log('v1.0.0');
  console.log('');
  console.log('usage:');
  console.log('');
  console.log('--help              print this message');
  console.log('--name={name}       input name');
  console.log('');
  process.exit(1);
}
console.log('Hello, ' + argv.name + '!');
console.log('Hello World!');
process.stdout.write('Hello World Again!\n'); //more direct way to write to the console;
//does not write new line by default
process.stderr.write('OMG HELP!\n'); //standard error to console
console.error('Help me!');
process.exit(1); //responds to error properly and not continue a chain
console.log(process.argv);//makes the array in the console
console.log(argv); //this is the yargs
