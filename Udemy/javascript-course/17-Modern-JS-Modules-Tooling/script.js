///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// import shoppingCart from "./shoppingCart";

/*
// Importing module
// I can change name by (as like totalPrice as price)
// import {
  //   addToCart,
  //   totalPrice as price,
  //   //   totalQuantity,
  //   tq,
  // } from "./shoppingCart.js";
  
  // console.log("Importing module");
  // // console.log(shoppingCost);
  
  // addToCart("bread", 5);

// // console.log(price, totalQuantity);
// console.log(price, tq);
////////////////////////////////////

// import * as ShoppingCart from "./shoppingCart.js";
// console.log("Importing module");

// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
//////////////////////////
*/
// import { cart } from "./shoppingCart";

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 6);
add("apple", 1);
add("cheese", 7);

console.log(cart);

///////////////////////////////////////
// Top-Level Await (ES2022)
/*
// console.log('Start fetching');
// const posts = await fetch("https://jsonplaceholder.typicode.com/posts");

// const data = await posts.json();

// console.log(data);
// console.log('Something');


const getLastPost = async function () {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();

  return { title: data.at(-1).title, text: data.at(-1) };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

///////////////////////////////////////
// The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/
///////////////////////////////////////
// CommonJS Modules
// Export
/*
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  // Import
  const { addTocart } = require('./shoppingCart.js');
  */

///////////////////////////////////////
// Introduction to NPM

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const youssef = new Person("Youssef");

console.log("Youssef" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import "regenerator-runtime/runtime";
