const person = {
    name: "satendra kumar",
    age: 23,
    address: {
        hoseNo: 45,
        streetName: "foodCourt"
    },
    displayName: function () {
        console.log(this.address)
    }
}
console.log(`${person['name']}`);  //template string use

// person.name = "Aman";
// console.log(person.name); //Aman


console.log(person.age);


//accessing object property
//two types

// 1.dot annotation
const fullname = person.name;
console.log(fullname);
//console.log(person.name);


//  2.bracket annotation
const field = "address";
const personstreetName = person[field]['streetName'];
console.log(personstreetName);


//Creating an object
const student = {
    name: "Rahul Kumar",
    dept: "Computer Science",
    address: "Delhi",
    printName: function () {
        console.log(this.name)
    }
}
student.printName();

//------------------------
/* const student = {
    name: "Rahul Kumar",
    dept: "Computer Science",
    address: "Delhi",
    printName() {
        console.log(this.name)
    }

}
student.printName(); */