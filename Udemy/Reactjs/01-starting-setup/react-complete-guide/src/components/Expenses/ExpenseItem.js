// use Hooks
// import React, { useState } from "react";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
/*
/////////////////////////////////
// Outputting Dynamic Data & Working with Expressions in JSX

const ExpenseItem = function () {
  const expenseDate = new Date(2022, 9, 3);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
    //   <div>March 28th 2022</div>
    //   <div className="expense-item__description">
    //     <h2>Car Insurance</h2>
    //     <div className="expense-item__price">$294.67</div>
    //   </div> 
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

*/

///////////////////////////////////
////  Passing Data via "props"
/*
const ExpenseItem = function (props) {
  return (
      <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div>
      </div>
      );
    };
    */

///////////////////////////////////
// Adding "normal" JavaScript Logic to Components

// Normal Function
// const ExpenseItem = function (props) {

// Arrow Function
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // let title = props.title;
  // const clickHandler = () => {
  //   setTitle("Updated !");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
