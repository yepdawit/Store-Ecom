// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const CategoryPage = ({ products }) => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter((product) => {
    return (
      product.category.toLowerCase().replace(" ", "-") ===
      categoryName.toLowerCase()
    );
  });

  return (
    <div>
      <h1>{categoryName.replace("-", " ")}</h1>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;
