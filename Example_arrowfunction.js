//normal function 
// function power(base, exponent) {
//   var result = 1;
//   for (var i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }
// console.log(power(2, 10));


//convert to arrow function
power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));

//example 2

/* function multiply(num1, num2) {
  return num1 * num2;
}
 */
let multiply = (num1, num2) => {
  console.log(num1 * num2);
}
multiply(3, 4); //12


//Example 3
/* function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(45)); */

//convert arrow function
let toCelsius = fahrenheit => {
  console.log((5 / 9) * (fahrenheit - 32));
}
toCelsius(45); //7.222222222

//Example
/*let who = 'World health organization';
function greet(who) {
  console.log("Hello " + who);
}
greet(who); */

//convert to arrow function
let who = 'World health organization';
let greet = who => console.log(`hello ${who}`);
greet(who);


//Example 
// This function returns a string padded with leading zeros
/* function padZeros(num, totalLen) {
  var numStr = num.toString();
  var numZeros = totalLen - numStr.length;
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
console.log(padZeros(2, 10)); //0000000002 */

//------------------------------
let padZeros = (num, totalLen) => {
  let numstr = num.toString();
  let numZeros = totalLen - numstr.length;
  for (let i = 1; i <= numZeros; i++) {
    numstr = `0 ${numstr}`;
    return numstr;
  }
}
console.log(padZeros([1, 2, 3, 4, 5], 10)); //0,1,2,3.4,5

