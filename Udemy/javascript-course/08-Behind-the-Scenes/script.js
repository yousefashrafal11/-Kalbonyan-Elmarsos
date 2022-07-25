'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   // console.log(firstName);
//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Yassen';
//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // add(2, 3);

//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Youssef';
// calcAge(1992);

// let x = 20,
//   y = 10;

//   let result = add(x, y);
//   console.log(result);

// function add(c, d) {
//   return c + d;
// }

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Youssef';
// let job = 'Developer';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1992);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const youssef = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// youssef.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = youssef.calcAge;
// matilda.calcAge();

// const f = youssef.calcAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const youssef = {
  firstName: 'Youssef',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  great: () => console.log(`Hey ${this}`),
};
