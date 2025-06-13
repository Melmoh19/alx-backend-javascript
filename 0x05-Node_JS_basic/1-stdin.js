// Display welcome message
console.log('Welcome to Holberton, what is your name?');

// Set stdin to resume and set encoding
process.stdin.resume();
process.stdin.setEncoding('utf8');

// Listen for data input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Listen for end of input (when user ends the program)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
