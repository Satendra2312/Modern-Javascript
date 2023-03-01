//this keywords
//Inside a regular function, this keyword refers to the function where it is called.

//Example 1
// const person = {
//     name: "satendra kumar",
//     age: 25,
//     displayage: function () {
//         console.log(this);
//     },
//     person1: {
//         name: "rocky",
//         age: 23,
//         displayage: function () {
//             console.log(this)
//         }
//     }
// }
// person.displayage()
// person.person1.displayage();

//Example 2
const car = {
    color: "red",
    brand: "thar",
    model: 2023,
    drive() {
        console.log(`I am driving my ${this.brand} car`)
    }
}
console.log(car.color); //black

car.drive(); //I am driving my thar car

const drive = car.drive.bind(car);

drive(); //I am driving my thar car
