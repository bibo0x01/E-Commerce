import mongoose  from "mongoose";
const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
        required: true
    },  
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'Rating must be at least 1'],
        max: [5, 'Rating must be at most 5']
    },  
    comment: {
        type: String,
        required: true,
        minLength: [10, 'Comment must be at least 10 characters long']
    }
}, { timestamps: true, versionKey: false });
const Review = mongoose.model('Review', reviewSchema);
export default Review;
