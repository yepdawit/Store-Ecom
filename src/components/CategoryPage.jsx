// CategoryPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { getProductsByCategory } from "../api/api";

const CategoryPage = ({ addToCart }) => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [limit, setLimit] = React.useState(10);
  const [sort, setSort] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProductsByCategory(
          categoryName,
          limit,
          sort
        );
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, [categoryName, limit, sort]);

  return (
    <div>
      <h1>{categoryName.replace("-", " ")}</h1>
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
