import SubCategory from "./subCategory.model.js";
import AppError from "../../utils/AppError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import slugify from "slugify";



const createSubCategory = asyncHandler(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, { lower: true, strict: true });
    const newSubCategory = new SubCategory(req.body);
    await newSubCategory.save();
    res.status(201).json({
        success: true,
        message: "SubCategory created successfully",
        data: newSubCategory
    });
}); 

const getAllSubCategories = asyncHandler(async (req, res, next) => {
    const subCategories = await SubCategory.find().populate('category', 'name');
    res.status(200).json({
        success: true,
        data: subCategories
    });
}
);

const getSubCategoryById = asyncHandler(async (req, res, next) => {
    const subCategory = await SubCategory.findById(req.params.id).populate('category', 'name');
    if (!subCategory) {
        return next(new AppError("SubCategory not found", 404));
    }
    res.status(200).json({
        success: true,
        data: subCategory
    });
});
const updateSubCategory = asyncHandler(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, { lower: true, strict: true });
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!subCategory) {
        return next(new AppError("SubCategory not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "SubCategory updated successfully",
        data: subCategory
    });
});



const deleteSubCategory = asyncHandler(async (req, res, next) => {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) {
        return next(new AppError("SubCategory not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "SubCategory deleted successfully"
    });
});
export { createSubCategory, getAllSubCategories, getSubCategoryById, updateSubCategory, deleteSubCategory };