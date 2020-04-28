import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./components/Login";
// import Register from "./components/Register";
import SignUp from "./components/registerPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={SignUp} />
    </div>
  );
}

export default App;
