//Data types 
//var/let/const

//var function-scope/Globle-scope
//Example 1
/*var a = 20;
console.log(a);  // 20;*/

//Example 2
/*function printMarks() {
    var marks;
    marks = 30;
    console.log(marks);
    // marks = 80;  //undefined
}
printMarks();*/

//Example 2
/*var a = 20;
var b = 30;
var a = 50;
console.log(a);   //last assign value 50
console.log(b);   // 30*/

//Example 3
/*function printNumber() {
    for (var i = 0; i < 10; i++) {
        console.log(i); //0,1,2,3,4,5,6,7,8,9
    }
} printNumber();*/

//Example 4
/*var math = 34;
function marks() {
    console.log(' Marks ' + math);  //marks 34
} marks();*/

//Example 5
/*var a;
function func() {
    var b = 10;
    console.log(a); // undefined
    console.log(b); // 10
}
func();
a = 20;
console.log(a); // 20
console.log(b); //ReferenceError: b is not defined*/

//Exameple 6
/* var a = 10;
console.log(a);    // 10
function func() {
    var b = 20;
    a = 30;
    console.log(b);  // 20
    console.log(a); // 30
}
func();
console.log(a); // 10 */

//Example 7

var name_1 = "satendra kumar";
var name_1 = "Rocky";
console.log(name_1); //rocky

function myfunction() {
    var fun = "game";
    var fun = "game again";
    console.log(fun);  //game again
}
myfunction();