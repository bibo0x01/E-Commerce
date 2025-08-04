import express from 'express'
import dbConnection from './src/config/dbConnection.js'
import categoryRouter from './src/modules/category/cotegory.routes.js'
import AppError from './src/utils/AppError.js'
import errorHandler from './src/middlewares/errorHandler.js'
import bootstrap from './src/modules/bootstrap.routes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000 

app.use(express.json())
bootstrap(app)  












// 404 handler
app.use((req, res , next) => {
   next(new AppError(`Route ${req.originalUrl} not found` , 404))
})
// Global error handler
app.use(errorHandler)

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err); 
   
});











app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost/${PORT} `);
    
})