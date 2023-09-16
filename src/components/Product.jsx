import React from "react";
import { useNavigate } from "react-router-dom";
const Product = ({ products, addToCart }) => {
  const navigate = useNavigate();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3 onClick={() => navigate(`/products/${product.id}`)}>
            {product.title}
          </h3>
          <h4 className="price">${product.price}</h4>
          <img src={product.image} alt={product.title} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Product;
