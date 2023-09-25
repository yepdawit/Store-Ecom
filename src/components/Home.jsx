import React, { useEffect, useState } from "react"; // Import useState
import Product from "./Product";
import SearchBar from "./SearchBar";

const Home = ({ products, addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // This effect ensures that if the `products` prop changes externally,
    // `filteredProducts` is updated.
    setFilteredProducts(products);
  }, [products]);

  return (
    <div>
      <h1>Home Page</h1>
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="category-container">
        {filteredProducts.length > 0 ? ( // Check if there are products to display
          filteredProducts.map((product) => (
            <div key={product.id}>
              <div className="product-container">
                <Product product={product} addToCart={addToCart} />
              </div>
            </div>
          ))
        ) : (
          <p>No products found...</p> // Display this if no products match the search
        )}
      </div>
    </div>
  );
};

export default Home;
