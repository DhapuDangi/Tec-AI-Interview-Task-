/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";
import "../styles/index.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let url = "/products";
    if (category) {
      url += `?category=${category}`;
    }

    API.get(url)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div className="products-page">
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <h3>Filter</h3>

        <p onClick={() => setCategory("")}>All</p>
        <p onClick={() => setCategory("men")}>Men</p>
        <p onClick={() => setCategory("women")}>Women</p>
        <p onClick={() => setCategory("gym")}>Gym</p>
      </div>

      {/* PRODUCTS */}
      <div className="products-content">
        <div className="sort-bar">
          <select>
            <option>Sort By</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>

        <div className="grid">
          {products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}