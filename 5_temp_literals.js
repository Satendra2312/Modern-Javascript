//template literals are enclosed by backticks(`) character instead of double of single quotes
//
//why use template literals
//merge more then two variables
//merge sting and variable

//template literals
const a = 10;
const b = 30;

const result = a + b;

//console.log(" Sum of " + a + " and " + b + " is " + result);  //concat string use

console.log(`sum of ${a} and ${b} is ${result}`); //template literals use

//new line msg code normal
//const msg = `This is my first\n \'Hello\' massage`;

//new line by template literals
const msg = `This is my first 
'Hello' message`
console.log(msg);
