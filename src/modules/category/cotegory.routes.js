import express from 'express'
const categoryRouter = express.Router()

import { createCategory , getAllCategories , getCategoryById , updateCategory , deleteCategory} from './category.controller.js'


categoryRouter.post('/add', createCategory)
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter
