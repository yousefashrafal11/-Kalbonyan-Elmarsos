/* 

////////////////////////////////////
// Linking a JavaScript File
let js = "Amazing";
if (js === "Amazing") alert("JavaScript Fun!");

40 + 8 + 23 - 10;

console.log(40 + 8 + 23 - 10);
// let 3years = 29;
// this wrong way syntax code because start variable number
// console.log(3years);


////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


////////////////////////////////////
// let, const and var

let year = 30;
year = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "Ashraf";
console.log(lastName);


const now = 2037;
const ageYoussef = now - 1992;
const ageHamza = now - 2021;
console.log(ageYoussef, ageHamza);

console.log(ageYoussef * 2, ageHamza / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// this means 2 * 2 = 4 * 2 = 8

////////////////////////////////////
// Basic Operators
// Math operators

const firstName = "Youssef";
const lastName = "Ashraf";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15

x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;

console.log(x);

// Comparison operators
console.log(ageYoussef > ageHamza);
console.log(ageHamza >= 19);

const isFullAge = ageYoussef >= 18;

console.log(now - 1992 > now - 2021);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageYoussef = now - 1992;
const ageHamza = now - 2021;
console.log(now - 1992 > now - 2021);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageYoussef + ageHamza) / 2;
console.log(ageYoussef, ageHamza, averageAge);
*/

//Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
/* 
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

////////////////////////////////////
// Strings and Template Literals
/*
const firstName = "Youssef";
const job = "Developer";
const birthYear = 1992;
const year = 2037;

const youssef =
  "I'm " +
  firstName +
  " , a " +
  (year - birthYear) +
  " Years Old " +
  job +
  " !";
console.log(youssef);

const youssefNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(youssefNew);

console.log(`Just a regular string ...`);

console.log("string with \n\
multipe \n\
lines");

console.log(`String 
multiple
lines`);
*/

////////////////////////////////////
// Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
  console.log("sarah Can Start Driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait anther ${yearsLeft} years :)`);
}

// const birthYear = 1992; // first test code
const birthYear = 2006; // second test code
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// type conversion
const inputYear = "1992";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 30);

console.log(Number("Youssef"));
console.log(typeof NaN);

console.log(String(30), 30);

////////////////////////////////////
// Type Conversion and Coercion
// type conversion

console.log("I am " + 23 + "years old");
console.log("23" - "10" - 3); // number
console.log("23" * "3"); // number
console.log("23" / "2"); // number

let n = "1" + 1; //11 string
n = n - 1; // number
console.log(n);
*/

////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Youssef"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a Jab !");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

////////////////////////////////////
// Equality Operators: == vs. ===

/*
// const age = 18; // first test code
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //22 === 23 -> false
  console.log("cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is an amzaing number!");
} else if (favourite === 9) {
  console.log("9 is an amzaing number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");
*/

////////////////////////////////////
// Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);
// first step
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy !");
// }

// second step
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy !");
// }

// third step
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log("Both win the trophy !");
// }

// fourth step
// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy !");
// } else {
//   console.log("No one win the trophy 😢");
// }

// fifth step
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy !");
// } else {
//   console.log("No one win the trophy 😢");
// }

////////////////////////////////////
// The switch Statement

/*
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Got to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Got to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

*/

////////////////////////////////////
// Statements and Expressions
/*
3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

////////////////////////////////////
// The Conditional (Ternary) Operator
