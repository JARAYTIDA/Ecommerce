import userDetails from "../model/schema.js";
import crypto from "crypto"
import dotenv from 'dotenv'
import nodemailer from "nodemailer"
import jwt from 'jsonwebtoken';
dotenv.config();

const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD;
const HOST_NAME = process.env.HOST_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_NAME = process.env.ADMIN_NAME;
const SECRET_ENCRYPTION_TICKET = process.env.SECRET_ENCRYPTION_TICKET;
const SECRET_ENCRYPTION_FORGOT_PASSWORD = process.env.SECRET_ENCRYPTION_FORGOT_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
    host: HOST_NAME,
    port: 587,
    secure: false,
    auth: {
        user: ADMIN_EMAIL,
        pass: EMAIL_PASS,
    },
});

export const signup = async (req, res) => {
    const hash1 = crypto.createHash(ENCRYPTION_METHOD);
    const hash2 = crypto.createHash(ENCRYPTION_METHOD);
    const hash3 = crypto.createHash(ENCRYPTION_METHOD);
    const  user = req.body;
    const data = hash1.update(user.password, 'utf-8');
    //Creating the hash in the required format
    const gen_hash= data.digest('hex');
    user.password = gen_hash;
    const ticket = hash2.update(`${user.email_id}+${user.user_id}_${SECRET_ENCRYPTION_TICKET}`, "utf-8");
    const ticket_gen_hash = ticket.digest('hex');
    const forgotPass = hash3.update(`${user.email_id}+${user.user_id}_${SECRET_ENCRYPTION_FORGOT_PASSWORD}`, "utf-8");
    const forgotPass_gen_hash = forgotPass.digest('hex');
    user.ticket = ticket_gen_hash;
    user.forgotPass = forgotPass_gen_hash;
    user.verified = false;
    user.cart = [];
    user.resetPassReq = false;
    const newUser = new userDetails(user);

    // res.status(200).json(user);

    try {
        await newUser.save();
        const jwt_token = jwt.sign(user, JWT_SECRET);
        // verification email 

        console.log("sending email ......")
        const mailOptions = {
            from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
            to: `${user.email_id}`,
            subject: 'Please Verify you account',
            text: `please click on this link in order to verify you account  http://localhost:3000/verification?ticket=${ticket_gen_hash}  `,
        };
        
          // Send mail
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log('Error occurred:', error.message);
        //         res.status(500).send('Error sending email');
        //         return;
        //     }
        //     console.log('Email sent successfully!');
        //     console.log('Message ID:', info.messageId);
        //     res.send('Email sent successfully!');
        // });
        
        res.status(200).json({user_id : newUser.user_id, email_id: newUser.email_id});
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const signin = async (req, res) => {
    const hash = crypto.createHash(ENCRYPTION_METHOD);
    const user = req.body;
    if(user.password === undefined){
        res.status(401).json({message:"password required"});
    }
    const data = hash.update(user.password, 'utf-8');
    //Creating the hash in the required format
    const gen_hash= data.digest('hex');

    try{
        if(user.email_id){
            const find_user = await userDetails.find({email_id : user.email_id, password:gen_hash});
            if(find_user != undefined){
                res.status(200).json(find_user);
            }
            else res.status(401).json({message:"user does not exist"});
        }
        else if(user.user_id){
            const find_user = await userDetails.find({user_id : user.user_id, password:gen_hash});
            if(find_user !== undefined){
                res.status(200).json(find_user);
            }
            else res.status(401).json({message:"user does not exist"});
        }
        else{
            const msg = "email id or username needed";
            res.status(401).json({message: msg});
        }
    }catch(err){
        res.status(401).json({message:err});
        // console.log(err);
    }
}

export const getUser = async (req, res) => {
    const {email} = req.query;
    const find_user = await userDetails.find({email_id : email});
    try{
        res.status(200).json({name : find_user[0].user_id, email: find_user[0].email_id});
    } catch(err){
        console.log(err);
        res.status(401).json({message : err.message});
    }
}

export const getCartSize = async (req, res) => {
    const data = req.query;
    try{
        const user = await userDetails.find({email_id : data.email});
        const count = user[0].cart.length;

        // console.log(count);
        res.cookie('slf').status(200).json({count : count});
    } catch(err){
        console.log(err);
    }
}

export const sendEmail = async (req, res) => {
    console.log("sending email ......")
    const data = req.body;
    const mailOptions = {
        from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        to: 'thissugarbaby@gmail.com',
        subject: 'Test Email 2',
        html: data.html,
    };
      // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
            res.status(500).send('Error sending email');
            return;
        }
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
        res.status(200).json({message:'Email sent successfully!'});
    });
}

function filterObjectsByProperties(array, properties) {
    return array.find(obj => {
        if (!obj) return false; // Check if obj is undefined or null
        for (let key in properties) {
            if (obj[key] !== properties[key]) {
                return false;
            }
        }
        return true;
    });
}

export const addToCart = async (req, res) => {
    const data = req.query;
    const product = data.product;
    const id = data.id;
    const count = data.count;
    const find_user = await userDetails.find({email_id:data.email});
    if(find_user === undefined || find_user.length === 0){
        res.status(401).json({message : 'need to login'});
    }
    try{
        const cnt = (count !== undefined && parseInt(count) > 0) ? count : 1;
        const cart = find_user[0].cart;
        const find_product = filterObjectsByProperties(cart, { product: product, id : id })
        if(find_product === undefined || find_product === null || cart.length === 0){
            await userDetails.updateOne(
                { email_id:data.email },
                { $push: { cart: {
                    product : product,
                    id : id,
                    count : parseInt(cnt),
                } } }
            )
            res.status(200).json({message : "cart updated successfully"})
        }
        else{
                await userDetails.updateOne(
                    { email_id:data.email },
                    { $pull: { cart: find_product } }
                )
    
                find_product.count = parseInt(count);
                
                await userDetails.updateOne(
                    { email_id:data.email },
                    { $push: { cart: find_product } }
                )
                res.status(200).json({message : "cart updated successfully"})
        }
    }catch(e){
        console.log(e);
        res.status(401).json({message : e})
    }
}

export const remove = async (req, res) => {
    const data = req.query;
    const product = data.product;
    const id = data.id;
    const find_user = await userDetails.find({email_id:data.email});
    if(find_user === undefined || find_user.length === 0){
        res.status(401).json({message : 'need to login'});
    }
    try{
        const cart = find_user[0].cart;
        const find_product = filterObjectsByProperties(cart, { product: product, id : id })
        await userDetails.updateOne(
            { email_id:data.email },
            { $pull: { cart: find_product } }
        )
        res.status(200).json({message : 'item removed successfully'});
    }catch(err){
        console.log(err);
        res.status(401).json({message : err.message});
    }
}

export const incrCart = async (req, res) => {
    const data = req.query;
    const product = data.product;
    const id = data.id;
    const find_user = await userDetails.find({email_id:data.email});
    if(find_user === undefined || find_user.length === 0){
        res.status(401).json({message : 'need to login'});
    }

    try{
        const cart = find_user[0].cart;
        const find_product = filterObjectsByProperties(cart, { product: product, id : id })
        await userDetails.updateOne(
            { email_id:data.email },
            { $pull: { cart: find_product } }
        )

        find_product.count = find_product.count + 1;
        
        await userDetails.updateOne(
            { email_id:data.email },
            { $push: { cart: find_product } }
        )
        res.status(200).json({message : "cart updated successfully"})
    }catch(e){
        console.log(e);
        res.status(401).json({message : e})
    }
}

export const decCart = async (req, res) => {
    const data = req.query;
    const product = data.product;
    const id = data.id;
    const find_user = await userDetails.find({email_id:data.email});
    if(find_user === undefined || find_user.length === 0){
        res.status(401).json({message : 'need to login'});
    }

    try{
        const cart = find_user[0].cart;
        const find_product = filterObjectsByProperties(cart, { product: product, id : id })
        await userDetails.updateOne(
            { email_id:data.email },
            { $pull: { cart: find_product } }
        )

        find_product.count = find_product.count - 1;
        
        await userDetails.updateOne(
            { email_id:data.email },
            { $push: { cart: find_product } }
        )
        res.status(200).json({message : "cart updated successfully"})
    }catch(e){
        console.log(e);
        res.status(401).json({message : e})
    }
}

export const emptyCart = async (req, res) => {
    const {email} = req.query;
    try {
        await userDetails.updateOne(
            { email_id:email },
            { $set: { cart: [] } }
        )
        res.status(200).json({message : "cart cart is now empty"})
    } catch (error) {
        console.log(error)
        res.status(401).json({message : e})
    }

}

export const getCart = async (req, res) => {
    const data = req.query;
    // console.log(data);
    try{
        const find_user = await userDetails.find({email_id:data.email});
        // console.log(find_user)
        res.status(200).json({cart : find_user[0].cart})
    }catch(e){
        console.log(e);
        res.status(401).json({message : e})
    }
}

// export const addToCart = async (req, res) => {
//     const data = req.query;
//     const email = data.email_id;
//     const product = data.product;
//     const id = data.id;
//     const find_user = await userDetails.find({email_id : email});
//     const arr = find_user.cart;
//     const obj = arr.find(o => o.product === `${product}`);

//     if(obj === undefined){
//         try{
//             await userDetails.updateOne(
//                 { email_id : email },
//                 { $push: { cart: {
//                     product : `${product}`,
//                     cart_value : [
//                         {
//                             id : id,
//                             count : 1,
//                         },
//                     ]
//                 } } }
//             )
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
//     else{
//         const cart_arr = obj.cart_value;
//         const obj2 = cart_arr.find(o => o.id === `${id}`);
//         if(obj2 === undefined){

//         }
//         else{
//             try{
//                 await userDetails.updateOne(
//                     { email_id : email, cart : obj2,},
//                     { $set: { cart: } }
//                 )
//             }
//             catch(e){
//                 console.log(e);
//             }
//         }
//     }
// }
