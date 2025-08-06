import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name :{
        type : String  , 
        unique : [true , 'name is required']   , 
        trim : true , 
        required : true  , 
        minLength : [ 4 , 'meinLength 2 char ']
    } , 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
  
    slug :{
        type : String   , 
        lowercase : true , 
        required : true }
    // } , 
    //     createdBy: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: true
    //     }
} , {timestamps : true, versionKey : false })

const SubCategory = mongoose.model('SubCategory' , subCategorySchema)
export default SubCategory 