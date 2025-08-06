import categoryRouter from "./category/cotegory.routes.js";
import subCategoryRouter from "./subCategory/subCategory.routes.js";

    const bootstrap = (app) => {
    app.use('/api/v1/categories', categoryRouter);
    app.use('/api/v1/subcategories', subCategoryRouter);
 }  
export default bootstrap;