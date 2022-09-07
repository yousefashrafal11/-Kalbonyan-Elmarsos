import react, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // Here we add State message Error
  const [error, setError] = useState();

  // Here function don't make reload page
  const AddUserHandler = (event) => {
    event.preventDefault();

    // Here make condition if input empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // setEnteredUsername(false);

      // Here we use state message
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values). ",
      });
      return;
    }

    if (+enteredAge <= 0) {
      // Here we use state message
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }

    // Here if make click submit implement function from app.js and pass data from function AddUserHandler
    props.onAddUser(enteredUsername, enteredAge);

    // Here print in console.log result
    // console.log(enteredUsername, enteredAge);

    // Here make after make insert data clear input value
    setEnteredUsername("");
    setEnteredAge("");
  };

  // Here function check if change it for username
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // Here function check if change it for age
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Here we add function handler Error message if make click okay or any space of page close message error
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
