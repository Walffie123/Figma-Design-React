import React from "react";
import Logo from "../../../constants/svg/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <img src={Logo} className="App-logo" alt="logo" />
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <div>
        <button className="auth-btn" style={{ backgroundColor: "white" }}>
          Sign in
        </button>

        <button
          className="auth-btn"
          style={{ backgroundColor: "#16133E", color: "white" }}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
