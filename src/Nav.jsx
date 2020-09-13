import React, { useContext } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

const Nav = () => {
  const [login] = useContext(AppContext);

  const handleLogout = () => {
    localStorage.setItem("login", false);
    window.location.href = "/";
  };

  return (
    <nav>
      <img src={logo} alt="img" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        {login === "true" ? (
          <>
            <Link to="/movie">
              <li>Movie</li>
            </Link>
            <Link>
              <li onClick={handleLogout}>Logout</li>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
