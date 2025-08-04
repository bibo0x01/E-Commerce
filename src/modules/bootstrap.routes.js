import categoryRouter from "./category/cotegory.routes.js";

 const bootstrap = (app) => {
    app.use('/api/v1/categories', categoryRouter);
 }  
export default bootstrap;