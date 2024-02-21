import express from 'express'

import { forgotPass, send_forgotPass_mail } from '../controllers/forgotPass_fun.js';

const resetPass = express.Router();

resetPass.post("/forgot", forgotPass);
resetPass.post("/reset-mail", send_forgotPass_mail);

export default resetPass;