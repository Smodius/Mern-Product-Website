//Entry point for Api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path"; // import the path module to handle file paths
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const _dirname = path.resolve(); // get the current directory name
 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // set the environment to development



app.use(express.json()) // accept json data
app.use("/api/products",productRoutes); // use the product routes

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "/frontend/dist"))); // serve the frontend build folder
    app.get("*", (req, res) => {
        res.sendFile(path.join(_dirname, "frontend", "build", "index.html")); // send the index.html file
    });
}

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT); // log the server start message
});