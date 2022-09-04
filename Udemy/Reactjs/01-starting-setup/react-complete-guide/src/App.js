import React from "react";
// import logo from "./logo.svg";
// import ExpenseItem from "./components/ExpenseItem";
// import "./App.css";

import { Expenses, Example } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

///////////////////////////////
// Outputting Dynamic Data & Working with Expressions in JSX
/*
function App() {
  return (
    <div className="App">
    <div>
    <h2>Let's get started!</h2>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    </div>
    </div>
    );
  }
  */
///////////////////////////////////
////  Passing Data via "props"

// Normal function
// function App() {
// arrow function
const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //this is happening under the hood and how React works.

  /*
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expense })
  );
  */
  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expense} />
      <Example />
    </div>
  );
};
export default App;
