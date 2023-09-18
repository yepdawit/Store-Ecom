import React from "react";

const Checkout = () => {
  const handleSubmit = () => {
    // Handle form submission to process the payment
    console.log("Payment processed.");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleSubmit}>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;
