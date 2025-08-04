import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity must be at least 1']
        }
    }]
    ,
    totalAmount: {
        type: Number,
        required: true,
        min: [0, 'Total amount must be a positive number']
    }
}, { timestamps: true, versionKey: false });
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
