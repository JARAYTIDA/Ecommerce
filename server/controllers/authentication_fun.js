import userDetails from "../model/schema.js";
import crypto from "crypto"
import dotenv from 'dotenv'
import nodemailer from "nodemailer"
dotenv.config();

const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD;
const HOST_NAME = process.env.HOST_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_NAME = process.env.ADMIN_NAME;
const SECRET_ENCRYPTION = process.env.SECRET_ENCRYPTION;

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
    const  user = req.body;
    const data = hash1.update(user.password, 'utf-8');
//Creating the hash in the required format
    const gen_hash= data.digest('hex');
    user.password = gen_hash;
    const ticket = hash2.update(`${user.email_id}+${user.user_id}_${SECRET_ENCRYPTION}`, "utf-8");
    const ticket_gen_hash = ticket.digest('hex');
    user.ticket = ticket_gen_hash;
    user.verified = false;
    const newUser = new userDetails(user);

    console.log(user);
    // res.status(200).json(user);

    try {
        await newUser.save();


        //verification email 

        // console.log("sending email ......")
        // const mailOptions = {
        //     from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        //     to: `${user.email_id}`,
        //     subject: 'Please Verify you account',
        //     text: `please click on this link in order to verify you account  http://localhost:3000/verification?ticket=${ticket_gen_hash}  `,
        // };
        
        //   // Send mail
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




        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const signin = async (req, res) => {
    const hash = crypto.createHash(ENCRYPTION_METHOD);
    const user = req.body;
    if(user.password === undefined){
        res.status(300).json({message:"password required"});
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
            else res.status(300).json({message:"user does not exist"});
        }
        else if(user.user_id){
            const find_user = await userDetails.find({user_id : user.user_id, password:gen_hash});
            if(find_user !== undefined){
                res.status(200).json(find_user);
            }
            else res.status(300).json({message:"user does not exist"});
        }
        else{
            const msg = "email id or username needed";
            res.status(300).json({message: msg});
        }
    }catch(err){
        console.log(user)
        // console.log(err);
    }
}

export const getUsers = async (req, res) => {
    try{
        const allUsers = await userDetails.find();
        console.log(allUsers);
        res.status(200).json(allUsers);
    } catch(err){
        console.log(err);
    }
}

export const sendEmail = async (req, res) => {
    console.log("sending email ......")
    const mailOptions = {
        from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        to: 'rajadityakumawat2@gmail.com',
        subject: 'Test Email 2',
        text: 'This is a test email sent from Server!',
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
        res.send('Email sent successfully!');
    });
}