import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Merchandise from './components/Merchandise';

import Login from './components/LoginPage';
// import Login from "./components/Login";
// import Register from "./components/Register";
import SignUp from './components/registerPage';
import ProductsList from './components/ProductsList';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Login} />

			<Route path="/Merchandise" component={Merchandise} />

			<Route path="/register" component={SignUp} />
			<Route path="/products" component={ProductsList} />
		</div>
	);
}

export default App;
