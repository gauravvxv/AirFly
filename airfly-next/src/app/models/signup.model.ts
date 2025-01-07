import mongoose from 'mongoose';

const userSchema  = new mongoose.Schema({
    name: {type: String , required: true},
    email: {type: String , required: true},
    password: {type: String , required: true},
    isAdmin: {type: Boolean , default: false},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Signup = mongoose.models.User || mongoose.model('User' , userSchema);

export default Signup
