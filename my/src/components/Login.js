import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link to={"/Register"}>Register</Link>
      <input
        type="text"
        placeholder="User Name"
        name="User Name"
        ref={register({ required: true, min: 2, maxLength: 80 })}
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
