import express from 'express'

import { signin, signup, getUsers, sendEmail, addToCart, getCart } from '../controllers/authentication_fun.js'

const auth_routes = express.Router();

auth_routes.post("/signin", signin);
auth_routes.post("/signup", signup);
auth_routes.get("/get", getUsers);
auth_routes.post("/email", sendEmail)
auth_routes.get("/add-to-cart", addToCart)
auth_routes.get("/get-cart", getCart)

export default auth_routes;
