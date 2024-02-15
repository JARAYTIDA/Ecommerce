import mongoose from "mongoose";

const user = mongoose.Schema({
    user_id: String,
    password: String,
    email_id: String,
    ticket: String,
    verified: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    },
    cart: [String],
})

const userDetails = mongoose.model('user_details', user);

export default userDetails;