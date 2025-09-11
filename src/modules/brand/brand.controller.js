import Brand from "./brand.model.js";
import Category from "../category/category.model.js";
import AppError from "../../utils/AppError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import slugify from "slugify";


const CreateBrand = asyncHandler(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, { lower: true, strict: true})
   const category = await Category.findById(req.body.category);
    if (!categoryategory) return next(new AppError("Category not found", 404));

 const brand = await Brand.create(req.body);
  res.status(201).json({
    success: true,
    message: "Brand created successfully",
    brand,
  });
}); 


const GetAllBrands = asyncHandler(async (req, res, next) => {   
    const brands = await Brand.find();
    res.status(200).json({
        success: true,
        count: brands.length,
        brands,
    });
    }
);
const GetBrandById = asyncHandler(async (req, res, next) => {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
        return next(new AppError("Brand not found", 404));
    }
    res.status(200).json({
        success: true,
        brand,
    });
});
const UpdateBrand = asyncHandler(async (req, res, next) => {
    req.body.slug = slugify(req.body.name, { lower: true });
    const brand = await Brand.findByIdAndUpdate
(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!brand) {
        return next(new AppError("Brand not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Brand updated successfully",
        brand,
    });
});
const DeleteBrand = asyncHandler(async (req, res, next) => {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
        return next(new AppError("Brand not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Brand deleted successfully",
    });
});

export { CreateBrand, GetAllBrands, GetBrandById, UpdateBrand, DeleteBrand };
