import React, { useState } from "react";
import { loginUser } from "../api/api";
import "../styles/login.css";

const Login = ({ handleLogin: handleUserLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      localStorage.setItem("LoggedIn", true);
      if (handleUserLogin) {
        handleUserLogin(username);
      }

      window.location = "/";
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
