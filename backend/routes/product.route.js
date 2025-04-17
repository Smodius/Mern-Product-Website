import express from "express";

import { getProducts, updateProducts, createProduct, deleteProduct } from "../controllers/product.controller.js"; // import the getProducts function from the controller

const router = express.Router();

router.get("/", getProducts);   //Get all products handler
router.put("/:id", updateProducts); //Update product handler
router.post("/", createProduct); //Create product handler
router.delete("/:id", deleteProduct); //Delete product handler

export default router; // export the router