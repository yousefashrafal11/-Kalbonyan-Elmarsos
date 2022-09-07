import react from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(event.preventDefault());
  };

  return (
    <Card className={classes.input}>
      <form onClick={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
