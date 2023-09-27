import React, { useEffect, useState } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";

const Home = ({ products, addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);
    if (value === "price_asc") {
      const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
      setFilteredProducts(sorted);
    } else if (value === "price_desc") {
      const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
      setFilteredProducts(sorted);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select
          className="sort-select"
          name="sort"
          id="sort"
          value={sortType}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      <div className="category-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <div className="product-container">
                <Product product={product} addToCart={addToCart} />
              </div>
            </div>
          ))
        ) : (
          <p>No products found...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
