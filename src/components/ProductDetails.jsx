import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/api";
const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = await getProductById(productId);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Failed to fetch product", error);
        console.error("Product ID:", productId);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const formattedPrice = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{formattedPrice}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
