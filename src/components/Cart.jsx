import React from "react";
import "../styles/cart.css";

const Cart = ({ cart, removeFromCart, updateQuantity, loggedInUser }) => {
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={`${product.id}-${index}`}>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div>
              <button
                className="cart-item-quantity"
                onClick={() => updateQuantity(product, -1)}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                className="cart-item-quantity"
                onClick={() => updateQuantity(product, 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(product)}>
              <i className="fa fa-trash"></i> Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
