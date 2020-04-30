import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddProduct = (props) => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    market_location: "",
    user_id: "",
    description: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const submit = (id) => {
    id.preventDefault();
    axiosWithAuth()
      .post("/api/products", newItem)
      .then((res) => {
        console.log({ res });
        setNewItem(
          props.products.filter((item) => {
            return item.id !== id;
          })
        );
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <h1>Add Product!</h1>
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

          <input
            type="number"
            placeholder="quantity"
            name="quantity"
            value={newItem.quantity}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newItem.price}
            onChange={handleChange}
          />

          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
