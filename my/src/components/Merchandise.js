import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useParams, useHistory } from "react-router-dom";

const initialItem = {
  name: "",
  price: "",
  description: "",
  quantity: "",
};

export default function Merchandise(props) {
  const { register } = useForm();
  const { push } = useHistory();
  const { id } = useParams();
  const [newItem, setNewItem] = useState(initialItem);

  console.log("Thsi is the new item", newItem);
  console.log("Thsi is the new item", setNewItem);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/products/${id}`)

      .then((res) => {
        console.log({ res });
        setNewItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(id);
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/products/${id}`, newItem)
      .then((res) => {
        console.log({ res });
        setNewItem(res.data);
        push("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={newItem.name}
        ref={register({ required: true, min: 2, maxLength: 80 })}
      />

      <input
        type="number"
        placeholder="quantity"
        name="quantity"
        onChange={handleChange}
        value={newItem.quantity}
        ref={register({ required: true, min: 1 })}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
        value={newItem.price}
        ref={register({ required: true })}
      />
      <textarea
        name="description "
        onChange={handleChange}
        placeholder="description"
        value={newItem.description}
        ref={register({ required: true, min: 1, maxLength: 300 })}
      />

      <input type="submit" />
    </form>
  );
}
