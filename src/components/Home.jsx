import React from "react";
import Product from "./Product";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
