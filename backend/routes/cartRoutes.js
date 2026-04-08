/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const router = require("express").Router();

let cart = [];

// ADD TO CART
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;

  cart.push({ id: Date.now(), productId, quantity });

  res.json({ message: "Added to cart", cart });
});

// GET CART
router.get("/", (req, res) => {
  res.json(cart);
});

// DELETE ITEM
router.delete("/:id", (req, res) => {
  cart = cart.filter(item => item.id != req.params.id);
  res.json(cart);
});

module.exports = router;