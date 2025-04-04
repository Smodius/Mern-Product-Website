//Entry point for Api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"
 
dotenv.config();

const app = express();

app.post("/products", async (req, res) => {
    const product = req.body; //user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message:"please provide all fields"});
    }


    const newProduct = new Product(product)
});

// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});