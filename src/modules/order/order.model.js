import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({   
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
    }],
    totalAmount: {
        type: Number,
        required: true,
        min: [0, 'Total amount must be a positive number']
    },
    shippingAddress: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer' , 'Cash on Delivery'],
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending' 
    } 
}, { timestamps: true, versionKey: false });
const Order = mongoose.model('Order', orderSchema);
export default Order;
