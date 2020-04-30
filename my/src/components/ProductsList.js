import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory, useParams } from 'react-router-dom';
import Header from './nav';
import AddItem from './AddProduct';

import '../styles/registerPage.css';

//componnents

import { axiosWithAuth } from '../utils/axiosWithAuth';

const ProductsList = (props) => {
	const [products, setProducts] = useState([]);
	const [counter, setCounter] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const history = useHistory();
	const { id } = useParams();

	console.log(products);
	console.log('this is the Id', id);

	useEffect(() => {
		axiosWithAuth()
			.get(`api/users/${id}/products`)
			.then((res) => {
				console.log({ res });
				setProducts(res.data);
				isFetching(true);
			})
			.catch((err) => console.log(err.response));
	}, []);

	const handleClick = (id) => {
		const item = products.filter((product) => {
			return product.id === id;
		});
		props.setNewItem(item[0]);
		props.setTracker(!props.tracker);
		history.push(`/products/${id}`);
	};

	const deleteItem = (id) => {
		console.log(id);
		axiosWithAuth()
			.delete(`/api/products/${id}`)
			.then((res) => {
				setProducts(
					products.filter((item) => {
						return item.id !== id;
					})
				);
				console.log('delete call', res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<AddItem
					setProducts={setProducts}
					products={products}
					setCounter={setCounter}
					counter={counter}
				/>
			</div>
			<h3>List of items for sale</h3>

			{isFetching && (
				<Loader type="Grid" color="#3ec1d3" height={80} width={80} />
			)}

			<div>
				<h2>Can you see this?</h2>
				{products.map((products) => (
					<div key={products.id}>
						<h2>{`Name : ${products.name}`}</h2>
						<h2>{`Description : ${products.description}`}</h2>
						<h2>{`Quantity : ${products.quantity}`}</h2>
						<h2>{`Price : ${products.price}`}</h2>
						<button onClick={() => handleClick(products.id)}>Edit</button>
						<button onClick={() => deleteItem(products.id)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsList;
