import React, { useEffect, useState } from "react";
import API from "../api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    API.get("/cart").then(res => setCart(res.data));
  };

  const removeItem = async (id) => {
    await API.delete(`/cart/${id}`);
    fetchCart();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>Product ID: {item.productId}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => removeItem(item.id)}>
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}