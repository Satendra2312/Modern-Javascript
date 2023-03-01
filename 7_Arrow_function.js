//Arrow functions allows a short syntax for writing function expressions
//You don't need the function keyword, the return keyword, and the curly brackets.

//arrow functon with single parameter
// you can omit the parentheses 
square = number => number * number;
console.log(square(20)); //400

//arrow function with more than one parameter 
const addition = (num1, num2) => num1 + num2;
console.log(addition(10, 20));//30

//arrow function no parameter
//If a function doesn't take any argument, then you should use empty parentheses
const printHello = () => console.log("Hello");
printHello(); //Hello

// Arrow Function as an Expression
//You can also dynamically create a function and use it as an expression.
let age = 20;
let welcome = (age < 18) ?
    () => console.log("Baby") :
    () => console.log("Adult");

welcome(); //Adult

//Multiple arrow function
//If a function body has multiple statements, you need to put them inside curly brackets {}
/* let multi = (a, b) => {
    let res = a * b;
    return res;
}
let res1 = multi(90, 20);
console.log(res1); */

let multi = (a, b) => a * b;
console.log(multi(20, 3));

//arguments binding
//normal function
/* let x = function () {
    console.log(arguments);
}
x(2, 3, 5, 6); */ // [arguments]{'0':2,'1':3,'2':5,'3':6}

//arrow function
//Arrow functions do not have arguments binding
let x = () => {
    console.log(arguments);
}
x(2, 3, 5, 6); //Arrow functions do not have arguments binding

//To solve this issue, you can use the spread syntax
let spread = (...n) => {
    console.log(n);
}
spread(2, 3, 4); // [2,3,4]

/*avoid the arrow function
1. You should not use arrow functions to create methods inside objects.
2. You cannot use an arrow function as a constructor.*/