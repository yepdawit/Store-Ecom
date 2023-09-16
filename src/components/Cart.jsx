import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((product, index) => (
          // Append index to make sure the key is unique
          <li key={`${product.id}-${index}`}>
            {product.title}
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
