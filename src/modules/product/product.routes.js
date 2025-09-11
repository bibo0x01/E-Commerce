import { Router } from "express";
const productRouter = Router()

import {CreateProduct , DeleteProduct , UpdateProduct , GetAllProducts , GetProductById} from "./product.controller.js";

productRouter.post('/', CreateProduct);
productRouter.get('/', GetAllProducts);
productRouter.get('/:id', GetProductById);  
productRouter.put('/:id', UpdateProduct);
productRouter.delete('/:id', DeleteProduct);





export default productRouter;