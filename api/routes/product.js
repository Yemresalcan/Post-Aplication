const { models } = require('mongoose');
const Product = require('../models/Product');
const express= require('express');
const router = express.Router();


//! Get-All Product
router.get("/get-all", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
});



//! Add Product
router.post("/add-product", async (req, res) => {
try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Product has been added");
} catch (error) {
    res.status(400).json(error);
}
});


//! Update Product
router.put("/update-product", async (req, res) => {
    try {
        await Product.findOneAndUpdate({_id:req.body.productId}, req.body);
        res.status(200).json("Product has been updated");
    } catch (error) {
        res.status(400).json(error);
    }
});

//! Delete Product
router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({_id:req.body.productId});
        res.status(200).json("Product has been deleted");
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;