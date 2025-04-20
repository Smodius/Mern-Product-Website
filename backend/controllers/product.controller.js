import Product from "../models/product.model.js";
import mongoose, { get } from "mongoose";

export const getProducts = async (req, res) => {
    try
    {
        const products = await Product.find(); // find all products
        res.status(200).json({ success: true, data: products }); // send the products as a response
    }
    catch (error)
    {
        console.error("Error in get products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateProducts = async (req, res) => {
    const { id } = req.params; // get the id from the request params
        const product = req.body; // get the product data from the request body
    
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status (404).json({ success: false, message: "Invalid Product Id" });
        }
    
        try
        {
            const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // find the product by id and update it
            res.status(200).json({ success: true, data: updatedProduct });
        }  
        catch (error)
        {
            console.error("Error in updating product:", error.message);
            res.status(404).json({ success: false, message: "Cannot Edit because Product not found" });
        }
};

export const createProduct = async (req, res) => {
    const product = req.body; //user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message:"please provide all fields"});
    }


    const newProduct = new Product(product)

    try
    {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }
    catch (error)
    {
        console.error("Error in create product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct = async (req, res) => {  
    const { id } = req.params; // get the id from the request params
    console.log("id:", id); // log the id to the console

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status (404).json({ success: false, message: "Invalid Product Id" });
    }
    try
    {
        await Product.findByIdAndDelete(id); // find the product by id
        res.status(200).json({ success: true, message: "PRODUCT DELETED" });
    }  
    catch (error)
    {
        console.error("Error in delete product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};