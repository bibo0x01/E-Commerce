import { Router } from "express";
const brandRouter = Router();
import { CreateBrand, DeleteBrand, UpdateBrand, GetAllBrands, GetBrandById } from "./brand.controller.js";

brandRouter.post('/', CreateBrand);
brandRouter.get('/', GetAllBrands);
brandRouter.get('/:id', GetBrandById);
brandRouter.put('/:id', UpdateBrand);
brandRouter.delete('/:id', DeleteBrand);

export default brandRouter;
