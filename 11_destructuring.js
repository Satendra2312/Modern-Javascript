//basic
let intro = ["Hello", "I", "am", "satendra kumar"];
/* let greeting = intro[0];
let pronoun = intro[1];

console.log(greeting); //Hello
console.log(pronoun); //I
 */


//basic array destructuring
/* let [greeting, pronoun] = intro;
console.log(greeting); //Hello
console.log(pronoun); */ //I

//or

//the same result
/* let [greeting, , pro] = ["Hello", "I", "am", "satendra kumar"];
console.log(greeting); //Hello
console.log(pro); //am */


//declaring variable before assignment and skiping item in array
/* let greet, name;
[greet, , , name] = ["Hello", "I", "am", "satendra kumar"];
console.log(greet); //Hello
console.log(name);  //satendra kumar */


//assignment the rest(...) of an array
/* let [greet, ...allin] = ["Hello", "I", "am", "satendra kumar"];
console.log(greet);
console.log(allin); */

//destructuring assignment with function
/* function getArray() {
    return ["Hello", "I", "am", "satendra kumar"];
}
let [greet, ...allin] = getArray();
console.log(greet);
console.log(allin); */

//using default value
/* let [greet = "Welcome", name = "Rocky",] = [undefined, "satendra", "sir"];
console.log(greet);
console.log(name); */


//Swapping Values using the Destructuring Assignment
/* let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a); //20
console.log(b)  //10
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//objet destructuring
//Basic object destructuring
/* let person = { name: "Satendra kumar", country: "India", job: "developer" };
let personName = person.name;
let personCountry = person.country;
let personeJob = person.job;
console.log(personName);
console.log(personCountry);
console.log(personeJob); */


//same as basic
/* let { name, country, job } = { name: "Satendra kumar", country: "India", job: "developer" };
console.log(name);
console.log(country);
console.log(job); */


//Variables declared before being assigned
/* let person = { name: "Satendra kumar", country: "India", job: "developer" };
// { name, country, job } = person;
//console.log(name); //unspected token

//Wait, what just happened?! Oh, we forgot to add () before the curly brackets.
({ name, country, job } = person);
console.log(job); */ //developer


///.........................
/* let person = { name: "Satendra kumar", country: "India", job: "Developer" };

let { name, friends, job } = person;

console.log(name);    //"Satendra kumar"
console.log(friends); //undefined
 */
//Using a new Variable Name
/* let person = { name: "Satendra kumar", country: "India", job: "Developer" };

let { name: FirstName, friends, job: fJob } = person;

console.log(FirstName);    //"Satendra kumar"
console.log(fJob); */ //developer

//using default value
/* let person = { name: "satendra kumar", country: "India", job: "" };

let { name, jobTitle = "Programmer" } = person;

console.log(name);    //"Satendra kumar"
console.log(jobTitle); */ //Programmer



//Computed Property Name
/* let pop = "name";
let { [pop]: foo } = { name: "satendra kumar", country: "India", job: "Developer" };
console.log(foo); //satendra kumar
 */

//Combining Arrays with Objects
/* let person = { name: "satendra kumar", Friends: ["Ashu", "Sachin"], job: "Developer", country: "India" };
let { name: foo, Friends: boo } = person;
console.log(foo); //satendra kumar
console.log(boo);  //['Ashu','Sachin']
 */


//Objects can also be nested when destructuring
/* let person = {
    name: "satendra kumar",
    Place: {
        city: "raebareli",
        country: "India"
    },
    friends: ["ashu", "sachin"]
};
let {
    name: foo,
    Place: {
        city: Dist,
        country: cont
    },
    friends: x
} = person;
console.log(Dist, cont, x, foo); */


//Rest in Object Destructuring
/* 
let person = { name: "satendra kumar", Friends: ["Ashu", "Sachin"], job: "Developer", country: "India" };
let { name, Friends, ...others } = person;
console.log(name);
console.log(Friends);
console.log(others); */


//Object Destructuring and Functions
function person({ name: x, job: y } = {}) {
    console.log(x);
}
person({ name: "satendra kumar" }); //satendra kumar
person(); //undefined
//person(friends); //not defined