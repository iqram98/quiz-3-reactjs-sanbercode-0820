import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

const LoginForm = () => {
  const [, setLogin, users] = useContext(AppContext);
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      users.find((user) => {
        return user.username === input.username;
      })
    ) {
      setLogin(true);
      localStorage.setItem("login", true);
      window.location.href = "/movie";
    } else {
      setLogin(false);
    }
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setInput({ username: "", password: "" });
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="username" value={input.username}>
          Username
        </label>
        <input type="text" name="username" onChange={handleChange} />
        <label htmlFor="password" value={input.password}>
          Password
        </label>
        <input type="password" name="password" onChange={handleChange} />
        <button className="tombolLogin">login</button>
      </form>
      <p>/*Note = username: sanbercode, password: 123*/</p>
    </div>
  );
};

export default LoginForm;
