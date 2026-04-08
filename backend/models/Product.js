/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model("Product", productSchema);