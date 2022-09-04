// import logo from "./logo.svg";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
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

function App() {
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

  return (
    <div className="App">
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem
          id={expense[0].id}
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        />
        <ExpenseItem
          id={expense[1].id}
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        />
        <ExpenseItem
          id={expense[2].id}
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        />
        <ExpenseItem
          id={expense[3].id}
          title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
        />
      </div>
    </div>
  );
}
export default App;
