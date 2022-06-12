/* 

// Linking a JavaScript File
let js = "Amazing";
if (js === "Amazing") alert("JavaScript Fun!");

40 + 8 + 23 - 10;

console.log(40 + 8 + 23 - 10);
// let 3years = 29;
// this wrong way syntax code because start variable number
// console.log(3years);

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
