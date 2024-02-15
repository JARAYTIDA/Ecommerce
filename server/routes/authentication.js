import express from 'express'

import { signin, signup, getUsers, sendEmail } from '../controllers/authentication_fun.js'

const auth_routes = express.Router();

auth_routes.get("/signin", signin);
auth_routes.post("/signup", signup);
auth_routes.get("/get", getUsers);
auth_routes.get("/email", sendEmail)

export default auth_routes;