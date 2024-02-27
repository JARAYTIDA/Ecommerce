import express from 'express'

import { forgotPass, send_cancel_mail, send_confirmOrder_mail, send_forgotPass_mail } from '../controllers/forgotPass_fun.js';

const resetPass = express.Router();

resetPass.post("/forgot", forgotPass);
resetPass.post("/reset-mail", send_forgotPass_mail);
resetPass.get("/order", send_confirmOrder_mail)
resetPass.get("/cencel", send_cancel_mail);

export default resetPass;