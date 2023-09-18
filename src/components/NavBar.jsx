import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ categories, loggedInUser, handleLogout }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div>
        {loggedInUser ? (
          <>
            <span>Hello, {loggedInUser}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
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
