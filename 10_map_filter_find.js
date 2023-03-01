/* //example 1

const student = [
    { id: "01", Name: "satendra kumar", sports: "basketboll" },
    { id: "02", Name: "aman kumar", sports: "cricket" },
    { id: "03", Name: "sachin kumar", sports: "basketboll" },
    { id: "04", Name: "anuj kumar", sports: "cricket" },
    { id: "05", Name: "ashu gupta", sports: "hocky" }
];

//map() method use
const only = student.map((students) => {
    return {
        Id: students.id,
        Name: students.Name
    }
})
console.log(only);

//filter() method use

const result = student.filter((students) => {
    if (students.name === 'satendra kumar') {
        return students;
    }
})
console.log(result);


//find() method use
const find = student.find((students) => {
    if (students.id === '04') {
        return students;
    }
})
console.log(find);


//Example 2
const numbers = [4, 6, 7, 5, 22, 33, 23, 45, 77, 11, 99, 44, 66, , 34, 77];

//map use
const result1 = numbers.map(num => `double of ${num} is ${num * 2}`);
console.log(result1);

//filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers);

//find 
const evenNo = numbers.find(num => num % 2 === 0);
console.log(evenNo);
 */


// Taking an array of Student object
const students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" }
]

//Printing only names using map
//by function
const onlyNames = students.map(function (items) {
    return items.name;
})
console.log(onlyNames);

//by arrow
const onlynames = students.map((items) => {
    return items.name;
});
console.log(onlynames);


// Printing students who play basketball using filter 


const basketballPlayers = students.filter(function (student) {
    return student.sports === "Basketball";
});
console.log(basketballPlayers)


/* Printing students name who play
basketball using filter */

const basketballPlayersName = students.filter(function (student) {
    return student.sports === "Cricket";
}).map(student => student.name);

console.log(basketballPlayersName)

// // Printing out the name of Basketball players using forEach
basketballPlayersName.forEach(function (players) {
    console.log(players);
});


//Example
const users = ["satendra", "ashu", "aman", "sachin"];
const topthree = users.filter((Element, index) => index <= 3);
console.log(topthree);