//callback function 

//normal function
/* function student(std_name) {
    console.log(`Hello. My name is ${std_name}`);
}
function age() {
    console.log('My age is 23years');
}
age();
student('Ram kumar'); */

//use callback function
function student(std_name, age) {
    console.log(`My name is ${std_name}`);
    age();
} function age() {
    console.log('My age is 23years');
} student('satendra kumar', age);