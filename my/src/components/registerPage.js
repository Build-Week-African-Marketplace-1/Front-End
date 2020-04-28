import React from "react";
import Register from "./Register";
import Header from "./nav";
import "../styles/registerPage.css";

export default function Signup() {
  return (
    <div className="cont">
      <div className="nav">
        <Header />
      </div>
      <div className="Holder">
        <div className="card">
          <div className="info">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
