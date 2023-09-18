import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { getProducts, getCategories } from "./api/api";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(null);
  const [sort, setSort] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("username")
  );

  [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts(limit, sort);
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
    console.log("Current cart:", cart);
    console.log("add to cart called, product:", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const handleLogin = (username) => {
    localStorage.setItem("username", username);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setLoggedInUser(null);
  };

  return (
    <Router>
      <NavBar
        categories={categories}
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryPage products={products} addToCart={addToCart} />}
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
