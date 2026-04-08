/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export default API;