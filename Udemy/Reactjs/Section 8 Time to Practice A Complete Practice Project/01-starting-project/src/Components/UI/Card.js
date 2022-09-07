import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // Here Make add div Card with userlist (users)
    <div
      className={`${classes.card} 
      ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
