import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("LoggedIn");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavBar;


