import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default NavBar;
