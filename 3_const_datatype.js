//Example 1
/*const a = 30;
if (a == 10) {
    console.log(` a equal to ` + a); // 10
} else {
    console.log('not equal');
}*/

//Example 2
/*const a = 10;
if (a) {
    var a = 20; //SyntaxError a has been already declared
}*/

//Example 3
/*const a = 10;
if (a) {
    let a = 20;     //let re-declaration will work in sub-blocks only
    console.log(a);  // 20 
}*/

//Example 3
/*const a = { x: 1, y: 2 };
let b = { z: 3 };
//a = b; //TypeError: Assignment to constant variable
a.z = b.z;
console.log(a); //{ x: 1, y: 2, z: 3 }
a.x = b.z;
console.log(a); //{ x: 3, y: 2, z: 3 }*/

//Example 4
/*const a = [1, 2];
let b = [4];
//a = b; //TypeError: You can push into an array but can not reassign 
a.push(3);
console.log(a); //[ 1, 2, 3 ]
a.push(b[0]);
console.log(a); //[ 1, 2, 3, 4 ]*/

//Exameple 5
const a = 10;
console.log(a);    // 10
function func() {
    let b = 20;
  //  a = 30;  // //TypeError: Assignment to constant variable
    console.log(b);  // 20
   // console.log(a); //  //TypeError: Assignment to constant variable
}
func();
console.log(a); // 10