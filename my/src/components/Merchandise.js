import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Merchandise() {
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
        type="number"
        placeholder="quantity"
        name="quantity"
        ref={register({ required: true, min: 1 })}
      />
      <input
        type="number"
        placeholder="Price"
        name="Price"
        ref={register({ required: true })}
      />
      <textarea
        name="description "
        placeholder="description"
        ref={register({ required: true, min: 1, maxLength: 300 })}
      />

      <input type="submit" />
    </form>
  );
}
