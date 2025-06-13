#!/usr/bin/env node

// Display welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Set stdin encoding to utf8
process.stdin.setEncoding('utf8');

// Listen for data input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Listen for end of input (when user ends the program)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
