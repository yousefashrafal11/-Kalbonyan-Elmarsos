"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// here we are change variable name so not working
// if (passTest) hasDriverLicense = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I Can Drive :D");
*/

//////  Functions   /////////

// this is first kind from function
/*
function logger() {
  console.log("My name is Youssef");
}

// here I can say / calling / running / invoking function
logger();
logger();
logger();

function fruitProcessr(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessr(5, 8);

console.log(appleJuice);
// don't forget, you can call main function direct like that

console.log(fruitProcessr(3, 9));

// also you can make add new value to parameters like that

const appleOrangeJuice = fruitProcessr(2, 4);
console.log(appleOrangeJuice);
//Number that is built in function 
const num = Number("23");
console.log(num);
*/
//////  Declarations Functions Expressions   /////////
/*
//Function Declaration
function calAge1(birthYear) {
  // const age = 2037 -  birthYear;
  return 2037 - birthYear;
}
const age1 = calAge1(1991);
// console.log(age1);

//Function Expression
const calcAge2 = function calAge1(birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
const calcAge2 = function calAge1(birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

// this is name function ( yearsUntilRetirement )
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
// this is the first way in print result
console.log(yearsUntilRetirement(1991));
// this is the second way in the print result
const yearsUntil = yearsUntilRetirement(1991);
console.log(yearsUntil);
*/

/*
function cutFuritPieces(fruit) {
  return fruit * 4;
}

function fruitProcesor(apples, oranges) {
  const applePiesces = cutFuritPieces(apples);
  const orangePiesces = cutFuritPieces(oranges);

  const juice = `Juice with ${applePiesces} pieces of apple and ${orangePiesces} pieces of oragne.`;
  return juice;
}
console.log(fruitProcesor(2, 3));
*/

/*
const calcAge = function(birthYear){
  return    2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1992, "Youssef"));
console.log(yearsUntilRetirement(1965, "Ashraf"));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/


/*
const calcAverage  = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////////////////////////////////
// Introduction to Arrays

const friend1 = "Ahmed";
const friend2 = "Ali";
const friend3 = "Sayed";
const friend4 = "Osama";

const friends = ['Ahmed', 'Ali', 'Sayed', 'Osama'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length);
console.log(friends[friends.length - 1]);



