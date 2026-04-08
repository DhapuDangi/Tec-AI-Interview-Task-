# 🛒 E-Commerce Project Setup Guide


## 1️⃣ Requirements

1. **MongoDB Community Edition** (Server + Compass)  
   - Download: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)  
2. **Node.js & npm** (for backend if using Node.js)  
   - Download: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
3. **Frontend**: React / HTML / JS project folder  

---

## 2️⃣ Project Folder

1. Create folder `ecommerce-project`  
2. Place **`products.json`** file (provided) inside the folder  
   - JSON contains **16 products** with:
     - `name` → Product Name
     - `price` → Product Price
     - `category` → men / women / gym
     - `image` → Direct URL of product image (works in browser)

---

## 3️⃣ MongoDB Setup

### Option A: Using MongoDB Compass (GUI)

1. Open MongoDB Compass → Connect (default URI: `mongodb://localhost:27017`)  
2. Create a new database: `shopDB`  
3. Create a new collection: `products`  
4. Click **Add Data → Import File**  
5. Select `products.json` → Format: **JSON** → Import  
6. Verify that **all 16 products** are added with correct image URLs

### Option B: Using Command Line / Terminal

1. Open terminal / command prompt  
2. Navigate to folder containing `products.json`  
3. Run:
   ```bash
   mongoimport --db shopDB --collection products --file products.json --jsonArray


## 4 Verify Data

use shopDB
db.products.find().pretty()
