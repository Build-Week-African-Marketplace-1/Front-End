import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Register() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log('Register error', errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Link to={'/'}>
				<div>Login</div>
			</Link>
			<input
				type="text"
				placeholder="User Name"
				name="User Name"
				ref={register({ required: true, min: 2, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Email"
				name="Email"
				ref={register({ required: true, pattern: /^\S+@\S+$/i })}
			/>
			<input
				type="text"
				placeholder="Password"
				name="Password"
				ref={register({ required: true, min: 1, maxLength: 12 })}
			/>

			<input type="submit" />
		</form>
	);
}
