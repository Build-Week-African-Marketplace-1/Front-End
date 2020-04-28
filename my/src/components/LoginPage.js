import React from "react";
import Login from "./Login";
import Header from "./nav";
import "../styles/registerPage.css";

export default function LoginPage() {
  return (
    <div className="cont">
      <div className="nav">
        <Header />
      </div>
      <div className="Holder">
        <div className="card">
          <div className="info">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
