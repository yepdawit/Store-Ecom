import React, { useState } from "react";

const Checkout = ({ isLoggedIn, cart }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (!isLoggedIn) {
    return <h1>Please login to checkout</h1>;
  }

  if (isSubmitted) {
    return (
      <div>
        <h1>Thank you for your purchase!</h1>
        <p>
          You will receive an email confirmation shortly with your order
          details.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={`${product.id}-${index}`}>
            <span>{product.title}</span> -
            <span>Quantity: {product.quantity}</span> -
            <span>Total: ${(product.price * product.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div>
        <p>Total: ${calculateTotalPrice()}</p>
        <button onClick={handleSubmit}>Confirm Purchase</button>
      </div>
    </div>
  );
};

export default Checkout;
