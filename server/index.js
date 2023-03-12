import dotenv from "dotenv";
dotenv.config();

import connectToDb from "./db.js";
import express from "express";

//Our Routes
import productRoutes from "./routes/productRoutes.js";

connectToDb();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
