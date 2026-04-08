import React from "react";

export default function Footer() {
  return (
    <div style={{ background: "#111", color: "white", padding: "20px", textAlign: "center" }}>
      <h3>SHOP.CO</h3>
      <p>Stay updated with latest offers</p>
      <input placeholder="Enter email" />
      <button>Subscribe</button>
      <p style={{ marginTop: "10px" }}>© 2026 SHOP.CO</p>
    </div>
  );
}