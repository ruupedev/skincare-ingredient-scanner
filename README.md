# 🧴 Skincare Ingredient Scanner

A lightweight skincare ingredient lookup tool built with **HTML**,
**CSS**, **JavaScript**, **Node.js**, **Express**, and **SQLite**.\
Type any ingredient into the search bar and instantly view property data
like irritation potential, comedogenic rating, and more.

This project is ideal for learning full-stack basics or building a
simple offline ingredient checker.

## ✨ Features

-   🔍 **Ingredient search** via `/search?name=...`
-   ⚡ **Fast Express backend** with better-sqlite3
-   🗄️ **Local SQLite database** (no external APIs)
-   🎨 **Responsive UI** with simple ingredient cards
-   📦 **Beginner-friendly, minimal structure**

## 📁 Project Structure

    skincare-ingredient-scanner/
    │
    ├── index.html                 # Frontend UI
    ├── styles.css                 # Styling
    ├── script.js                  # Frontend logic
    │
    ├── server.js                  # Express backend / API
    ├── skincare_ingredients.db    # SQLite database
    │
    ├── package.json               # Dependencies / metadata
    └── package-lock.json          # Auto-generated

## 🚀 Installation

### 1. Clone the repository

``` bash
git clone https://github.com/YOUR_USERNAME/skincare-ingredient-scanner.git
cd skincare-ingredient-scanner
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the server

``` bash
node server.js
```

### 4. Open the app

Visit:

    http://localhost:3000

## 🧠 How It Works

1.  User types an ingredient in the search box.
2.  `script.js` sends a GET request to `/search`.
3.  Express runs an SQLite query to match ingredient names.
4.  Results are returned as JSON.
5.  The frontend renders each ingredient and its properties inside
    styled cards.

## 🔧 Technologies Used

-   Node.js
-   Express
-   better-sqlite3
-   SQLite
-   HTML
-   CSS
-   JavaScript

## 🪪 License

MIT License
