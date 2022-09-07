import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    // Here get Cart component with his class (users)
    <Card className={classes.users}>
      {/* Here make element userlist component */}
      <ul>
        {props.users.map((user) => (
          // here we add key because it is requerd this message error====> Keys should be unique so that components maintain their identity across updates.
          // this id we get from id app.js file
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
