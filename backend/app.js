//Entry point for Api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // set the environment to development

app.use(express.json()) // accept json data
app.use("/api/products",productRoutes); // use the product routes

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT); // log the server start message
});