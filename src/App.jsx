import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { getProducts, getCategories } from "./api/api";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import CategoryPage from "./components/CategoryPage";
import Checkout from "./components/Checkout";
import ProductDetails from "./components/ProductDetails";
import "font-awesome/css/font-awesome.min.css";
import "../src/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("username")
  );

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

  // load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // save cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const updateQuantity = (product, amount) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += amount;
      if (existingProduct.quantity <= 0) {
        removeFromCart(product);
      } else {
        setCart([...cart]);
      }
    }
  };

  const handleLogin = (username) => {
    localStorage.setItem("username", username);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("LoggedInToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setCart([]);

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
        <Route
          path="/checkout"
          element={<Checkout isLoggedIn={Boolean(loggedInUser)} cart={cart} />}
        />

        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              loggedInUser={loggedInUser}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails addToCart={addToCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
