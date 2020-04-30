import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import Header from "./nav";
import "../styles/registerPage.css";

export default function Merchandise(props) {
  const { register } = useForm();
  const { push } = useHistory();
  const { id } = useParams();

  // console.log("Thsi is the new item", newItem);
  // console.log("Thsi is the new item", setNewItem);

  useEffect(() => {
    console.log(id);
    console.log(props.newItem);
    props.setNewItem(props.newItem);
    axiosWithAuth()
      .get(`api/products/${id}`)
      .then((res) => {
        console.log({ res });
        // props.setNewItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {}, [props.tracker, props.newItem]);

  const handleChange = (e) => {
    console.log(props.newItem);
    props.setNewItem({ ...props.newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/products/${id}`, props.newItem)
      .then((res) => {
        console.log({ res });
        props.setNewItem(res.data);
        push(`/product/${res.data.user_id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cont">
      <div className="nav">
        <Header />
      </div>
      <div className="Holder">
        <form className="card" onSubmit={handleSubmit}>
          <div className="info">
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={props.newItem.name || ""}
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="description"
              value={props.newItem.description || ""}
              ref={register({ required: true, min: 1, maxLength: 300 })}
            />
            <input
              type="text"
              placeholder="Location"
              name="market_location"
              value={props.newItem.market_location || ""}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={handleChange}
              value={props.newItem.quantity || ""}
              ref={register({ required: true, min: 1 })}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={props.newItem.price || ""}
              ref={register({ required: true })}
            />

            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
