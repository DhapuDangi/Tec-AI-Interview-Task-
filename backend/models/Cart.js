/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  qty: Number
});

module.exports = mongoose.model("Cart", cartSchema);