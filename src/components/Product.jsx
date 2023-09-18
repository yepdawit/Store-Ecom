import React, { useEffect } from "react";

const Product = ({ product, addToCart }) => {
  console.log("Inside Product component, addToCart:", addToCart);

  useEffect(() => {
    console.log("New props in Product:", { product, addToCart });
  }, [product, addToCart]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

Product.defaultProps = {
  addToCart: () => console.error("addToCart function not provided"),
};

export default Product;
