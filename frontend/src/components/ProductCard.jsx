/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React from "react";
import API from "../api";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {

  const addToCart = async () => {
    try {
      await API.post("/cart", {
        productId: product._id,
        quantity: 1
      });
      alert("Added to Cart ✅");
    } catch (err) {
      console.log(err);
      alert("Error adding to cart ❌");
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      {/* ⭐ rating (dummy UI) */}
      <p>⭐⭐⭐⭐☆</p>

      <p className="price">₹{product.price}</p>

      {/* ✅ ADD TO CART BUTTON */}
      <button className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}