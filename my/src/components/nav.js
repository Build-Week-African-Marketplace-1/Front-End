import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function header() {
  return (
    <div className="Header">
      <h1>African Marketplace</h1>
      <nav className="links">
        <Link to={"/"}>Login </Link>

        <Link to={"/Register"}>Register </Link>
      </nav>
    </div>
  );
}
