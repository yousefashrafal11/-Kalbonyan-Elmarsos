import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  // Here use useState because fetch array
  const [usersList, setUserList] = useState([]);

  // Here we use useState but here fetch array so this is shap it
  const AddUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      // Here we add key with paramter id
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      {/* Here if insert new user implementation function above */}
      <AddUser onAddUser={AddUserHandler} />
      {/* Here print result userList from useState*/}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
