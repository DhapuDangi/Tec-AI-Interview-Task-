/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const Newsletter = require("../models/Newsletter");

exports.subscribe = async (req, res) => {
  const data = await Newsletter.create(req.body);
  res.json(data);
};