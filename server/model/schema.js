import mongoose from "mongoose";

const user = mongoose.Schema({
    user_id: { type : String , unique : true, required : true },
    password: { type : String , unique : true, required : true },
    email_id: { type : String , unique : true, required : true },
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