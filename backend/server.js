/*
 * Copyright (c) 2026
 * All rights reserved.
 */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB Connection (Improved)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");
})
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
  process.exit(1);
});

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});