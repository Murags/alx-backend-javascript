const readline = require("readline")

let interface = readline.createInterface({input: process.stdin,
                            output: process.stdout});
console.log("Welcome to Holberton School, what is your name?");

interface.on("line", line => {
    let name = line.toString();
    console.log(`Your name is ${name}`);
});

interface.on("close", () =>{
    console.log("This important software is now closing");
})
