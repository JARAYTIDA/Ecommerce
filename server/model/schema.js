import mongoose from "mongoose";

const user = mongoose.Schema({
    user_id: String,
    password: String,
    email_id: String,
    ticket: String,
    forgotPass: String,
    verified: Boolean,
    resetPassReq: Boolean,
    cart: [Object],
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const userDetails = mongoose.model('user_details', user);

export default userDetails;