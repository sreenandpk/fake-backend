const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "images")));

const products = require("./db.json").products;

app.get("/products", (req, res) => res.json(products));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
