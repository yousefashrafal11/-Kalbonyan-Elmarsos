import React from "react";

import Cart from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// Here we create message Error
const ErrorModal = (props) => {
  return (
    // Here we use classes style
    <div>
      {/* 1) Here we use class backdrop for make overlay */}
      {/* 2) Here we add function onClick button and you can change confirm here*/}

      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Cart className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            {/* here we use onClick function from file Button  */}
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Cart>
      </div>
    </div>
  );
};

export default ErrorModal;
