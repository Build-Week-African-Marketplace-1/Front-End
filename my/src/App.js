import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Merchandise from "./components/Merchandise";

import Login from "./components/LoginPage";

// import Login from "./components/Login";
// import Register from "./components/Register";
import SignUp from "./components/registerPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />

      <Route path="/products/:id" component={Merchandise} />

      <Route path="/register" component={SignUp} />

      <Route exact path="/products/:id" component={ProductsList} />
    </div>
  );
}
///products/:id

export default App;
