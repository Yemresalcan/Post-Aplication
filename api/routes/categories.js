const { models } = require('mongoose');
const Category = require('../models/category');
const express= require('express');
const router = express.Router();


//! Get-All category
router.get("/get-all", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
});



//! Add category
router.post("/add-category", async (req, res) => {
try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Category has been added");
} catch (error) {
    res.status(400).json(error);
}
});


//! Update category
router.put("/update-category", async (req, res) => {
    try {
        await Category.findOneAndUpdate({_id:req.body.categoryId}, req.body);
        res.status(200).json("Category has been updated");
    } catch (error) {
        res.status(400).json(error);
    }
});

//! Delete category
router.delete("/delete-category", async (req, res) => {
    try {
        await Category.findOneAndDelete({_id:req.body.categoryId});
        res.status(200).json("Category has been deleted");
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;