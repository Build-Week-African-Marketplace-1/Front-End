import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

export default function Merchandise() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="User Name"
        name="User Name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <select name="Location" ref={register({ required: true })}>
        <option value="Nigeria ">Nigeria </option>
        <option value="South Africa ">South Africa </option>
        <option value="West Africa ">West Africa </option>
      </select>
      <input
        type="number"
        placeholder="Quantity"
        name="Quantity"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Price"
        name="Price"
        ref={register({ required: true, maxLength: 12 })}
      />
      <textarea
        name="Description"
        placeholder="Description"
        ref={register({ required: true, maxLength: 300 })}
      />

      <input type="submit" />
    </form>
  );
}
