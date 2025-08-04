import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
    code: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: [3, 'Coupon code must be at least 3 characters long']
    },  
    discount: {
        type: Number,
        required: true,
        min: [0, 'Discount must be a positive number']
    },
    expiryDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true, versionKey: false });
const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;
