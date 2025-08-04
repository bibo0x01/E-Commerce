import categoryRouter from "./cotegory.routes.js";
import Category from "./category.model.js";
import AppError from "../../utils/AppError.js";    
import asyncHandler from "../../utils/asyncHandler.js";


const createCategory = asyncHandler(async (req, res, next) => {
    const newCategory = new Category(req.body);
     await newCategory.save();
    res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: newCategory
    }); 

})
const getAllCategories = asyncHandler(async (req, res, next) => {   
    const categories = await Category.find();
    res.status(200).json({
        success: true,
        data: categories
    });
})

const getCategoryById = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new AppError("Category not found", 404));
    }
    res.status(200).json({
        success: true,
        data: category
    });
})
const updateCategory = asyncHandler(async (req, res, next) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }); 
    if (!category) {
        return next(new AppError("Category not found", 404));
    }   
    res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: category
    }); 

})
const deleteCategory = asyncHandler(async (req, res, next) => { 
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return next(new AppError("Category not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Category deleted successfully"
    });
})




export {
    createCategory , getAllCategories, getCategoryById, updateCategory, deleteCategory  
}