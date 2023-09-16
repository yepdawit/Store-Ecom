import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { getProducts } from "./api/api";
import Login from "./components/Login";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const LoggedIn = localStorage.getItem("LoggedIn");

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Redirect to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Redirect to="/" />}
        />
        <Route
          path="/products"
          element={isAuthenticated ? <AllProducts /> : <Redirect to="/login" />}
        />
        <Route
          path="/cart"
          element={
            isAuthenticated ? (
              <Cart cart={cart} removeFromCart={removeFromCart} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
