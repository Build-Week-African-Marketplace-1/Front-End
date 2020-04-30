import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const AddProduct = () => {
	const { id } = useParams();
	const [newItem, setNewItem] = useState({
		name: '',
		price: '',
		market_location: '',
		user_id: '',
		description: '',
		quantity: '',
	});

	const handleChange = (e) => {
		setNewItem({ ...newItem, [e.target.name]: e.target.value });
	};

	const submit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post(`api/users/${id}/products`, newItem)
			.then((res) => {
				console.log({ res });
				const payload = res.data;
				setNewItem([...newItem, payload]);
			})
			.catch((err) => console.log({ err }));
	};

	return (
		<div>
			<h2>Add New Product!</h2>
			<form onSubmit={submit}>
				<div>
					<input
						type="text"
						placeholder="name"
						name="name"
						value={newItem.name}
						onChange={handleChange}
					/>
					<input
						name="description"
						type="text"
						value={newItem.description}
						onChange={handleChange}
						placeholder="description"
					/>
					<input
						type="text"
						placeholder="Location"
						name="market_location"
						value={newItem.market_location}
						onChange={handleChange}
					/>

					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
