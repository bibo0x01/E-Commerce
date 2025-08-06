import { Router } from "express";
const subCategoryRouter = Router();
import { createSubCategory, getAllSubCategories, getSubCategoryById, updateSubCategory, deleteSubCategory } from "./subCategory.controller.js"; 


subCategoryRouter.post("/", createSubCategory);
subCategoryRouter.get("/", getAllSubCategories);    
subCategoryRouter.get("/:id", getSubCategoryById);
subCategoryRouter.put("/:id", updateSubCategory);
subCategoryRouter.delete("/:id", deleteSubCategory);
export default subCategoryRouter;
