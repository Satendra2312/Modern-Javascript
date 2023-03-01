//for..of
/* let scores = [80, 90, 70];

for (let s of scores) {
    score = s + 5;
    console.log(score);  //85 95 75
}
 */

///////////////////////////////////////////
let scores = [10,20,30];
scores.message = 'Hi';

//for...in using
console.log("for...in:");
for (let score in scores) {
  console.log(score); // get the index no 0 1 2
}

//for...of using
console.log('for...of:');
for (let score of scores) {
  console.log(score); //get the value of an iterable  10 20 30
}


