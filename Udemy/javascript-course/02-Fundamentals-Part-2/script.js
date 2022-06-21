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
