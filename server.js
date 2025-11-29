const express = require("express");
const app = express();
app.use(express.json());   // lets Express automatically read JSON in incoming requests

app.use(express.static(__dirname));

const Database = require("better-sqlite3");
const db = new Database("skincare_ingredients.db");

app.get("/", (req, res) => {
    res.send("Hello from your backend")
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

app.get("/search", (req, res) => {
    const name = req.query.name;
    const stmt = db.prepare("SELECT * FROM ingredients as i JOIN properties as p on p.ingredient_id = i.id WHERE name LIKE ? ");
    const results = stmt.all(`%${name}%`);
    res.json(results);
});