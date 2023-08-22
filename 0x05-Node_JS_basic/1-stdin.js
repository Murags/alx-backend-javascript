const readline = require('readline');

const inter = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');

inter.on('line', (line) => {
  const name = line.toString();
  console.log(`Your name is: ${name}`);
  process.exit();
});

inter.on('close', () => {
  console.log('This important software is now closing\n');
});
