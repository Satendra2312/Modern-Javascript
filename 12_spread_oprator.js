//Spread is done with three time dot(...) like rest parameter.
//This is done to pass the array with the argument to the function calling.
//This is done to create a new array by merging two or more arrays.
//It is created a new array by adding some new value of an array.

/* const sum = (x, y) => {
  console.log(x);
  console.log(x + y);
};
let array = [20, 30];
sum(...array);
 */

//spread operator with object
const student = {
  name: "satendra kumar",
  age: 24,
  email: "rocky.rbl@gmail.com",
};
address = {
  village: "Raghavpur",
  block: "Maharajganj",
};
person1 = {
  ...student,
  address: { ...address },
  phone: "8808662487",
  name: "Rocky",
};
console.log(person1);
//result
/* {
name:'Rocky',
age:24,
email:{Village:'Raghavpur', block:'Maharajganj'},
phone:'8808662487'
} */

//spread operator with arrays
const cricketPlayers = ["A", "B", "C", "D"];
const FootballPlayers = ["S", "R", "G", "E"];

const Players = ["XYZ", ...cricketPlayers, ...FootballPlayers];
console.log(Players);

//spread with number
const numbers = [20, 44, 55, 22, 77, 23];
//const newNumbers = [88, 99, ...numbers];
const newNumbers = [88, 99, numbers[0], numbers[1]];

console.log(newNumbers);
