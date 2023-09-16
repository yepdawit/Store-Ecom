import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { getProducts } from "./api/api";
import Login from "./components/Login";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error("Could not fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productExists = cart.some((cartItem) => cartItem.id === product.id);

    // Only add the product if it doesn't already exist in the cart
    if (!productExists) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={<AllProducts products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
