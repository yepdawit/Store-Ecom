import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ categories, loggedInUser, handleLogout }) => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className="user">
        {loggedInUser ? (
          <>
            <span>Hello, {loggedInUser}</span>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
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
