/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const addToCart = () => {
    API.post("/cart", { product: product._id, qty: 1 });
    alert("Added to cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}