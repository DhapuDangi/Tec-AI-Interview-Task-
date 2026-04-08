/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const router = require("express").Router();
const Product = require("../models/Product");

// GET ALL PRODUCTS + FILTER
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;