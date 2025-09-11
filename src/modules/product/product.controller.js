import Product from "./product.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import slugify from "slugify";
import AppError from "../../utils/AppError.js";
import mongoose from "mongoose";

// Create Product
const CreateProduct = asyncHandler(async (req, res, next) => {
  req.body.slug = slugify(req.body.name, { lower: true });
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product,
  });
});

// Get All Products
const GetAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

// Get Product By ID
const GetProductById = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product
const UpdateProduct = asyncHandler(async (req, res, next) => {
 req.body.slug = slugify(req.body.name, { lower: true }); 
 
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  if (req.body.name) {
    req.body.slug = slugify(req.body.name, { lower: true });
  }

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product,
  });
});

// Delete Product
const DeleteProduct = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

export {
  CreateProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
};
