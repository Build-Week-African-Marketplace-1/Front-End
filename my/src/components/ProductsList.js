import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import Header from "./nav";

import "../styles/registerPage.css";

//componnents

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const history = useHistory();

  console.log(products);

  useEffect(() => {
    setIsFetching(true);
    axiosWithAuth()
      .get("/api/products")
      .then((res) => {
        setIsFetching(false);
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    console.log("I was clicked!!");
    return history.push(`/products/${id}`);
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
        console.log("delete call", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cont">
      <div className="nav">
        <Header />
      </div>
      <h3>List of items for sale</h3>

      {isFetching && (
        <Loader type="Grid" color="#3ec1d3" height={80} width={80} />
      )}

      <div className="holder">
        {products.map((products) => (
          <div className="card" key={products.id}>
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
