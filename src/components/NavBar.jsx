import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ categories }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <span>Categories:</span>
        {categories.map((category) => (
          <Link to={`/category/${category}`} key={category}>
            {category.replace("-", " ")}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
