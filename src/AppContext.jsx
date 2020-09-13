import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [users, setUsers] = useState([
    { username: "sanbercode", password: "123" },
  ]);
  return (
    <AppContext.Provider value={[login, setLogin, users, setUsers]}>
      {props.children}
    </AppContext.Provider>
  );
};
