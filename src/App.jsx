import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { getProducts, getCategories } from "./api/api";
import Login from "./components/Login";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Register from "./components/Register";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  }

  return (
    <Router>
      <NavBar categories={categories} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={<AllProducts products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryPage products={products} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
