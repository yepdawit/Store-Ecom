import React, { useEffect } from "react";
import Product from "./Product";

const Home = ({ products, addToCart }) => {
  useEffect(() => {}, [products, addToCart]);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="category-container">
        {products ? (
          products.map((product) => (
            <div key={product.id}>
              <div className="product-container">
                <Product product={product} addToCart={addToCart} />
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
