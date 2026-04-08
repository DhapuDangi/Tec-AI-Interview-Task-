/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const item = await Cart.create(req.body);
  res.json(item);
};

exports.getCart = async (req, res) => {
  const cart = await Cart.find().populate("product");
  res.json(cart);
};

exports.removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
};