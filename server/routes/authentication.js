import express from 'express'

import { signin, signup, getUser, sendEmail, addToCart, getCart, getCartSize, decCart, incrCart, emptyCart, remove } from '../controllers/authentication_fun.js'
import { pay } from '../controllers/stripe_fun.js';

const auth_routes = express.Router();

auth_routes.post("/signin", signin);
auth_routes.post("/signup", signup);
auth_routes.get("/get", getUser);
auth_routes.post("/email", sendEmail)
auth_routes.get("/add-to-cart", addToCart)
auth_routes.get("/get-cart", getCart)
auth_routes.get("/cart-size", getCartSize)
auth_routes.get("/dec-cart", decCart)
auth_routes.get("/incr-cart", incrCart)
auth_routes.get('/empty', emptyCart)
auth_routes.get('/remove', remove)
auth_routes.post('/pay', pay)

export default auth_routes;
