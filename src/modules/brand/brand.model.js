import mongoose from "mongoose";

const branSchema = new mongoose.Schema({
    name :{
        type : String  , 
        unique : [true , 'name is required']   , 
        trim : true , 
        required : true  , 
        minLength : [ 4 , 'meinLength 2 char ']
    } , 
  SubCategory:{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
    img: {  
        type : String
    } ,
    slug :{
        type : String   , 
        lowercase : true , 
        required : true
    } , 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } , 
    
} , {timestamps : true, versionKey : false })

const Brand = mongoose.model('Brand' , branSchema)
export default Brand 