import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

// Normal function
// const Expenses = function (props) {
// arrow function
export const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Card className="expense-item">
      <p className="expense-item">You clicked {count} times</p>
      <button
        className="expense-item__price"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </Card>
  );
};

// export default Expenses;
