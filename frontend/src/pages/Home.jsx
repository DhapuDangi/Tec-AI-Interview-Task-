/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useEffect, useState } from "react";
import API from "../api";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "../styles/index.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <Hero />

      {/* BRANDS */}
      <div className="brands">
        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>CALVIN KLEIN</span>
      </div>

      {/* NEW ARRIVALS */}
      <h2 className="title">NEW ARRIVALS</h2>
      <div className="grid">
        {products.slice(0, 4).map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      {/* TOP SELLING */}
      <h2 className="title">TOP SELLING</h2>
      <div className="grid">
        {products.slice(4, 8).map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      {/* CATEGORIES */}
      <h2 className="title">BROWSE BY STYLE</h2>
      <div className="categories">
        <div className="cat">Casual</div>
        <div className="cat">Formal</div>
        <div className="cat">Party</div>
        <div className="cat">Gym</div>
      </div>

      {/* TESTIMONIAL */}
      <div className="testimonial">
        <h3>What our customers say</h3>
        <p>"Amazing quality and fast delivery!" ⭐⭐⭐⭐⭐</p>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h3>Subscribe Newsletter</h3>
        <input placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <Footer />
    </div>
  );
}