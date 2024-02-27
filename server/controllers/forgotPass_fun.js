import crypto from "crypto"
import dotenv from 'dotenv'
import nodemailer from "nodemailer"
import userDetails from "../model/schema.js";

dotenv.config();

const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD;
const HOST_NAME = process.env.HOST_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_NAME = process.env.ADMIN_NAME;
const REDIRECT_BASE_URL = process.env.REDIRECT_BASE_URL;

const transporter = nodemailer.createTransport({
    host: HOST_NAME,
    port: 587,
    secure: false,
    auth: {
        user: ADMIN_EMAIL,
        pass: EMAIL_PASS,
    },
});

export const forgotPass = async (req, res) => {
    const data = req.query;
    const pass = req.body;
    const hash1 = crypto.createHash(ENCRYPTION_METHOD);
    const data_pass = hash1.update(pass.password, 'utf-8');
    console.log(data.forgotPass);
    console.log(pass);
    //Creating the hash in the required format
    const gen_hash= data_pass.digest('hex');
    try{
        await userDetails.updateOne(
            { forgotPass:data.forgotPass },
            { $set: { password: gen_hash } }
        )
        
        console.log("password change successful");
        res.status(200).json({message: "password change successful"});

    } catch(e) {
        console.log(e);
        res.status(401).json({message:e});
    }
}

export const send_forgotPass_mail = async (req, res) => {
    console.log("sending email ......")
    const data = req.body;
    const to_email = data.email_id;
    const find_user = await userDetails.find({email_id : to_email});
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Summary - Shoes</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
        
        <h2>click this link to reset your password</h2>
        <p>  ${REDIRECT_BASE_URL}/reset-password/${find_user[0].forgotPass} </p>
        </body>
        </html>
    `
    const mailOptions = {
        from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        to: to_email,
        subject: 'Reset you Password',
        html: htmlContent,
    };

      // Send mail
    try{
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
    } catch(err){
        console.log(err);
        res.status(401).json({message : e.message});
    }
}

export const send_confirmOrder_mail = async (req, res) => {
    console.log("sending email ......")
    // const data = req.body;
    const {email} = req.query;
    let total = 1000;
    let subtotal = 0;
    let order_html = ``;
    const find_user = await userDetails.find({email_id : email});
    for(let i = 0; i<find_user[0].cart.length; i++){
        subtotal += find_user[0].cart[i].price*find_user[0].cart[i].count;
        order_html += `                
        <tr>
        <td>${find_user[0].cart[i].name}</td>
        <td>${find_user[0].cart[i].count}</td>
        <td>₹${find_user[0].cart[i].price}</td>
        <td>₹${find_user[0].cart[i].price*find_user[0].cart[i].count}</td>
        </tr>
        `
    }
    total += subtotal;
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Summary</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <h2>Order Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <!-- This part should be dynamically generated based on the cart products -->
                ${order_html}
                <!-- End of dynamic content -->
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3">Subtotal</th>
                    <td>₹${subtotal}</td>
                </tr>
                <!-- You can add more rows for tax, shipping, and total -->
                <tr>
                    <th colspan="3">Tax</th>
                    <td>₹100</td> <!-- Example value -->
                </tr>
                <tr>
                    <th colspan="3">Shipping</th>
                    <td>₹900</td> <!-- Example value -->
                </tr>
                <tr>
                    <th colspan="3">Total</th>
                    <td>₹${total}</td> <!-- Example value -->
                </tr>
            </tfoot>
        </table>
    </body>
</html>

    `
    const mailOptions = {
        from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        to: `${email}`,
        subject: 'Dear customer, here is you order summary',
        html: htmlContent,
    };

      // Send mail
    try{
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
    } catch(err){
        console.log(err);
        res.status(401).json({message : e.message});
    }
}

export const send_cancel_mail = async (req, res) => {
    console.log("sending email ......")
    // const data = req.body;
    const {email} = req.query;
    const find_user = await userDetails.find({email_id : email});
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Summary</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <h2>Dear, ${find_user[0].user_id} .. your order has been cancelled</h2>
    </body>
</html>

    `
    const mailOptions = {
        from: `"${ADMIN_NAME}" <${ADMIN_EMAIL}>`,
        to: `${email}`,
        subject: 'Dear customer, here is you order summary',
        html: htmlContent,
    };

      // Send mail
    try{
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
    } catch(err){
        console.log(err);
        res.status(401).json({message : e.message});
    }
}

