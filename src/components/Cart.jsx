import React from "react";
const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in the cart.</p>}
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
