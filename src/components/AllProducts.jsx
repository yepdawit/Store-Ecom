import React from "react";
import Product from "./Product";

const AllProducts = ({ products, addToCart }) => {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
