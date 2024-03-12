const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
const productRoutes = require("./routes/product.router");
app.use("/products", productRoutes);
module.exports = app;
