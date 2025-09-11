import categoryRouter from "./category/cotegory.routes.js";
import productRouter from "./product/product.routes.js";
import brandRouter from "./brand/brand.routes.js";
import subCategoryRouter from "./subCategory/subCategory.routes.js";


const bootstrap = (app) => {
        app.use('/api/v1/subcategories', subCategoryRouter);
        app.use('/api/v1/categories', categoryRouter);
        app.use('/api/v1/products', productRouter)
        app.use('/api/v1/brands', brandRouter)

 }   
export default bootstrap