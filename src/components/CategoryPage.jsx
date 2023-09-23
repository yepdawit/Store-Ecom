import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { getProductsByCategory } from "../api/api";

const CategoryPage = ({ addToCart }) => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProductsByCategory(categoryName);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, [categoryName]);

  return (
    <div className="category-container">
      <h1 className="category-heading">{categoryName.replace("-", " ")}</h1>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;
