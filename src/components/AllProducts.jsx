import React from "react";
import Product from "./Product";

const AllProducts = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default AllProducts;
