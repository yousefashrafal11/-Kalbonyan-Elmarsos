'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  // ES6 enhanced object literals
  const openingHours = {
    // thu: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  ///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));


/*
///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
// const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
// console.log(question);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
/////////////////////////////////////////////
// Maps: Fundamentals

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon', 'Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/


/*
///////////////////////////////////////////
// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.delete('Risotto'));
// console.log(ordersSet.clear());
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(
    [
      'Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'
  ]).size
);

console.log(new Set('YoussefAshrafElsayed').size);
const printSet = ['youssefAshrafElsayed'];
const print = new Set(printSet);
console.log(print);
*/

/*
////////////////////////////////////////////
//Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;

// for(const day of Object.keys(openingHours)){
for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`)
}
*/

/*
/////////////////////////////////////
//  Optional Chaining (?.)

if(restaurant.openingHours && restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon.open); // here we have error 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// if(restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.fri)console.log(restaurant.openingHours.fri.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days){
  // const open = restaurant.openingHours[day]?.open || 'Closed'; // here not defined 0 
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0,1) ?? 'method does not exist');
console.log(restaurant.orderTest1?.(0,1) ?? 'method does not exist');

// Array
const users = [{name:'Youssef', email: 'hello@youssef.io'}];
// const users = [];
console.log(users[0]?.name ?? 'User Array empty');

if (users.length > 0)console.log(users[0].name);
else console.log('User Array empty');
*/

/*
///////////////////////////////////
//  Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for(const item of menu) console.log(item);

for(const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`); // we make + 1 to start item from 1 instead of start 0
}

for(const [i, el] of menu.entries()){
  console.log(`${i + 1} : ${el}`);
}
*/

/*
//////////////////////////////////////
//  Logical Assignment Operators
const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//And assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; 
// rest2.owner = rest2.owner && '<ANONYMOUS>'; 
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////////////////////////
//The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests =  restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefind (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
///////////////////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log(3 || 'Youssef');
console.log('' || 'Youssef');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Youssef');
console.log(7 && 'Youssef');
console.log('Youssef' && 23 && null  && 'Hello');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('muchrooms', 'spinach');
*/

/*
////////////////////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
//SPREAD, because on RIGHT slide of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

//REST, because on LEFT  side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 6, 7);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('muchrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('muchrooms');
*/

/*
//////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // this way to get data
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // So new array, and you see that we get the exact same result here.
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

//Iterables: arrays, strings, maps, and sets,but not objects.
const str = 'Youssef';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(str);
// console.log(`${...str} Schmedtmann`); //that's because this is not a place

// Real-world Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //this best way So indeed, always go with this more modern ES6 syntax here. It's an amazing addition to the language.

// Objects
const newRestaurant = {
  founderIn: 1198,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  //here make set name to all object and calling all object by new name
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Defult values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////////////
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondery] = restaurant.categories;
console.log(main, secondery);

// const temp = main;
// main = secondery;
// secondery = temp;
// console.log(main, secondery);//here make reverse from get data array

[main, secondery] = [secondery, main];
console.log(main, secondery);

// console.log(restaurant.order(2, 0));
/// Receive 2 return values from a function ///
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destrcuturing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Defult values
// const [p, q, r] = [8, 9]; //here undefined therd parmter
const [p = 1, q = 1, r = 1] = [8, 9]; //here we make defult value
console.log(p, q, r);
*/
