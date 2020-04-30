import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Merchandise from "./components/Merchandise";

import Login from "./components/LoginPage";

// import Login from "./components/Login";
// import Register from "./components/Register";
import SignUp from "./components/registerPage";
import ProductsList from "./components/ProductsList";

const initialItem = {
  name: "",
  price: "",
  market_location: "",
  user_id: "",
  description: "",
  quantity: "",
};

function App() {
  const [newItem, setNewItem] = useState(initialItem);
  const [tracker, setTracker] = useState(false);
  return (
    <div className="App">
      <Route exact path="/" component={Login} />

      <Route path="/products/:id">
        <Merchandise
          newItem={newItem}
          setNewItem={setNewItem}
          tracker={tracker}
        />
      </Route>

      <Route path="/register" component={SignUp} />

      <Route exact path="/product/:id">
        <ProductsList
          newItem={newItem}
          setNewItem={setNewItem}
          tracker={tracker}
          setTracker={setTracker}
        />
      </Route>
    </div>
  );
}

export default App;
