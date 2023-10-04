import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  useEffect(() => {}, [product, addToCart]);

  const formattedPrice = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{formattedPrice}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>
        <button style={{ margin: "10px" }}>See Details</button>
      </Link>
    </div>
  );
};

Product.defaultProps = {
  addToCart: () => console.error("addToCart function not provided"),
};

export default Product;
