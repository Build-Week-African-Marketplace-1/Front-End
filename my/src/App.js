import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <h1>African Marketplace</h1>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
