import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect 👊
  /*  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);
*/

  // this component function reruns because you learned this effect function runs after every component render cycle. Not before it and not during it, but after it.
  /*
useEffect(() => {
  console.log("EFFECT RUNNING");
});
*/

  //we see effect running, for the first time this was mounted
  useEffect(() => {
    console.log("EFFECT RUNNING");
    //For keystrokes in password, we see effect running though
    // because the password is a dependency.
  }, [enteredPassword]);

  useEffect(() => {
    // Now that's a technique which is called debouncing.
    // we store function in variable
    const identifier = setTimeout(() => {
      console.log("Checking from validaity");

      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    //That's a so-called cleanup function.
    //It runs before every new side effect function execution.
    return () => {
      console.log("CLEANUP");
      // If we want to be sending an HTTP request here, we would have now only sent once instead of a dozen HTTP requests.
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    ///////////////////////////////////////////////
    // 1) Here If change input (enterEmail or enterPassword) implement useEffect above code 👆
    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );

    // here make check value
    // console.log(event.target.value);
    // console.log(enteredPassword.trim().length);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // 1) Here If change input (enterEmail or enterPassword) implement useEffect above code 👆
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );

    // here make check value
    // console.log(event.target.value.trim().length);
    // console.log(enteredEmail);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
