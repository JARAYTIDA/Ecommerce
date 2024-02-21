import express from 'express'

import { email_verification } from '../controllers/email_verification_fun.js';

const emailVerification = express.Router();

emailVerification.get("/", email_verification);

export default emailVerification;