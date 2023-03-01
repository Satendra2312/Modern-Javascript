//let blocked-scoped

//Example 1
/*let a = 10;
console.log(a);  //10
function func() {
    let b = 20;
    let a = 30;
    console.log(b); // 20
    console.log(a); // 30
} 
func();
console.log(a); // 10*/

//Example 2
/*function func() {
    var a = 10;
    let b = 20;
    var a = 30;
    // let b = 40; //SyntaxError: Identifier 'b' has already been declared
    console.log(b);
    console.log(a);
}
func();*/

//Example 3
/*function printMarks() {
    let marks;
   // marks = 30;
    console.log(marks);
    marks = 80;  //undefined
}
printMarks();*/

//Example 4
/*let i = 0;
function printNumber() {
    //let i = 0;
    for (i; i < 10; i++) {
        console.log(i); //0,1,2,3,4,5,6,7,8,9
    }
} printNumber();
//console.log(i);  //10*/

//Example 5
/*function func(n) {
    switch (n) {
        case 1:
            {
                let a = 10;
                console.log(a);
                break;
            }
        case 2:
            {
                let a = 20;
                console.log(a);
                break;
            }
    }
}
func(1);  //10
func(2); //20*/

//Example 5
let a;
function func() {
    let b = 10;
    console.log(a); // undefined
    console.log(b); // 10
}
func();
a = 20;
console.log(a); // 20
console.log(b); //ReferenceError: b is not defined
