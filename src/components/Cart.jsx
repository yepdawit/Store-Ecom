import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    if (!localStorage.getItem("LoggedInToken")) {
      alert("Please login to checkout!");
      navigate("/login");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/Checkout");
    }, 2000);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
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
                <div>${(product.price * product.quantity).toFixed(2)}</div>
                <button onClick={() => removeFromCart(product)}>
                  <i className="fa fa-trash"></i> Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotalPrice()}</p>
            <button onClick={handleCheckout} disabled={isLoading}>
              {isLoading ? "Loading..." : "Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
