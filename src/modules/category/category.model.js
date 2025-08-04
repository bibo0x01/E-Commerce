import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name :{
        type : String  , 
        unique : [true , 'name is required']   , 
        trim : true , 
        required : true  , 
        minLength : [ 4 , 'meinLength 2 char ']
    } , 
    img: {
        type : String
    } , 
    slug :{
        type : String   , 
        lowercase : true , 
        required : true
     
    }
    // , 
    //     createdBy: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: true
    //     }
} , {timestamps  : true, versionKey : false })

const Category = mongoose.model('Category' , categorySchema)
export default Category 