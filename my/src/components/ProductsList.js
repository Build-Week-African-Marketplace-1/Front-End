import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

//componnents

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  console.log(products);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="productslist">
      <h3>List of items for sale</h3>
      {isFetching && (
        <Loader type="Grid" color="#3ec1d3" height={80} width={80} />
      )}

      <div>
        {products.map((products) => (
          <div key={products.id}>
            <h2>{`Name : ${products.product}`}</h2>
            <h2>{`Category :${products.category}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
