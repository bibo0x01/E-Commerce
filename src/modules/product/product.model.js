import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Product name is required'],
        trim: true,
        required: true,
        minLength: [4, 'Product name must be at least 4 characters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    } , 
    discount: {
        type: Number,
        default: 0,
        min: [0, 'Discount must be a positive number']
    }
    ,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
    img: {
        type: String,
        required: true
    } , 
    images: [{
        type: String    
    }],
    color: {
        type: String,
        enum: ['red', 'blue', 'green', 'black', 'white', 'yellow', 'purple', 'orange'],
    }
    ,
    slug: {
        type: String,
        lowercase: true,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'Stock must be a positive number']
    },
    ratings: {
        type: Number,
        default: 0,
        min: [0, 'Ratings must be at least 0'],
        max: [5, 'Ratings cannot exceed 5']
    },
    numReviews: {
        type: Number,
        default: 0
    } , 
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }

} , {timestamps  : true, versionKey : false })

const Product = mongoose.model('Product' , productSchema)
export default Product 