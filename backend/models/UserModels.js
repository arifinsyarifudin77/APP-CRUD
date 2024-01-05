import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    hobbies: {
        type: [String]
    }
});

const User = mongoose.model('Users', UserSchema);

export default User;
