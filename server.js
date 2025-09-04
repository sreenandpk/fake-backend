import express from "express";
import jsonServer from "json-server";

const server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// 👉 Add this line to serve images
server.use("/images", express.static("images"));

// JSON Server APIs
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
