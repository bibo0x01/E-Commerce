import mongoos from "mongoose";
const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true, 
        minLength: [2, 'Name must be at least 2 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters long']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: ''
    }
}, { timestamps: true, versionKey: false });
const User = mongoose.model('User', userSchema);
export default User;
